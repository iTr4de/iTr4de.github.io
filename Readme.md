# NeuroVest AI Project

## Project Structure
```
📂 NeuroVest-AI
├── 📂 static/                # Static assets (CSS, JS)
│   ├── 📂 css/
│   │   ├── styles.css        # Global styles
│   ├── 📂 js/
│   │   ├── app.js            # Frontend logic (AJAX, form handling)
│
├── 📂 templates/             # HTML templates
│   ├── index.html            # Homepage
│   ├── login.html            # User login page
│   ├── register.html         # User registration page
│   ├── dashboard.html        # User dashboard
│   ├── contact.html          # Contact form
│   ├── subscription.html     # Subscription page
│
├── app.py                    # Main Flask application
├── auth_backend.py            # Authentication logic (JWT-based login & registration)
├── subscription_backend.py    # Subscription & payment processing logic (Stripe integration)
├── requirements.txt           # Python dependencies
├── README.md                  # Project documentation
```

## Project Modules & Purpose
```text
|File/Folder| Description|
|:----------------------------| :---------------------------------------------------------|
| app.py | Main Flask application, renders templates |
|auth_backend.py              |	Manages user authentication (JWT-based login/register)|
|subscription_backend.py      |	Handles subscriptions & Stripe payment integration|
|static/css/styles.css        |	Global styles & page layout|
|static/js/app.js             |	Handles form submissions, AJAX calls, and authentication|
|templates/index.html|	Homepage UI|
|templates/login.html|	Login page|
|templates/register.html|	Registration page|
|templates/dashboard.html|	User dashboard, subscription status|
|templates/contact.html|	Contact form UI|
|templates/subscription.html|	Subscription plans & payment options|
|requirements.txt|	Lists Python dependencies for easy installation|
|README.md|	Project documentation & setup guide|
```


## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourrepo/neurovest-ai.git
   cd neurovest-ai
   ```
2. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```
3. **Run the Flask application**
   ```bash
   python app.py
   ```

## API Endpoints
- `POST /api/register` - Register a new user
- `POST /api/login` - Authenticate and return a JWT token
- `GET /api/user` - Get user details (requires authentication)

## Features
✅ AI-driven investment insights  
✅ Secure authentication with JWT  
✅ User dashboard for portfolio management  

## License
MIT License
