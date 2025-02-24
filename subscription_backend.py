from flask import Blueprint, request, jsonify
import stripe

subscription_blueprint = Blueprint('subscription', __name__)

# Stripe API Configuration (Replace with your actual keys)
stripe.api_key = "your_stripe_secret_key_here"

# Subscription Plans
SUBSCRIPTION_PLANS = {
    "free": {"price": 0, "features": ["Basic AI insights"]},
    "individual": {"price": 9, "features": ["Full AI advisory & analytics"]},
    "corporate": {"price": 7, "features": ["Team-wide AI investment tools"], "min_users": 100},
}

@subscription_blueprint.route('/api/subscribe', methods=['POST'])
def subscribe():
    data = request.json
    plan = data.get("plan")
    email = data.get("email")
    
    if plan not in SUBSCRIPTION_PLANS:
        return jsonify({"success": False, "message": "Invalid subscription plan."}), 400
    
    # Stripe Payment Processing
    try:
        if plan == "free":
            return jsonify({"success": True, "message": "Free subscription activated!"})
        
        amount = SUBSCRIPTION_PLANS[plan]["price"] * 100  # Convert to cents
        if plan == "corporate":
            amount *= SUBSCRIPTION_PLANS[plan]["min_users"]  # Minimum user requirement
        
        # Create a Stripe checkout session
        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=[{
                "price_data": {
                    "currency": "usd",
                    "product_data": {"name": plan.capitalize() + " Plan"},
                    "unit_amount": amount,
                },
                "quantity": 1,
            }],
            mode="subscription",
            success_url="http://yourdomain.com/dashboard?success=true",
            cancel_url="http://yourdomain.com/subscription?cancel=true",
        )
        return jsonify({"success": True, "redirect_url": session.url})
    except Exception as e:
        return jsonify({"success": False, "message": str(e)}), 500
