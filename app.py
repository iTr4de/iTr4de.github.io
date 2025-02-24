from flask import Flask, render_template
from auth_backend import auth_blueprint
from subscription_backend import subscription_blueprint

app = Flask(__name__)
app.register_blueprint(auth_blueprint, url_prefix='/api')
app.register_blueprint(subscription_blueprint, url_prefix='/api')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/register')
def register():
    return render_template('register.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')

@app.route('/subscription')
def subscription():
    return render_template('subscription.html')

if __name__ == '__main__':
    app.run(debug=True)
