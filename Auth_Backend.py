from flask import Flask, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your_secret_key_here'

users = {}  # Temporary in-memory database (Replace with a real database in production)

def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = request.headers.get('x-access-token')
        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'], algorithms=['HS256'])
            current_user = users.get(data['email'])
            if not current_user:
                return jsonify({'message': 'User not found!'}), 401
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        return f(current_user, *args, **kwargs)
    return decorated

@app.route('/api/register', methods=['POST'])
def register():
    data = request.json
    email = data.get('email')
    name = data.get('name')
    password = data.get('password')

    if email in users:
        return jsonify({'success': False, 'message': 'User already exists!'}), 400
    
    hashed_password = generate_password_hash(password, method='sha256')
    users[email] = {'name': name, 'password': hashed_password}
    
    return jsonify({'success': True, 'message': 'User registered successfully!'}), 201

@app.route('/api/login', methods=['POST'])
def login():
    data = request.json
    email = data.get('email')
    password = data.get('password')
    
    user = users.get(email)
    if not user or not check_password_hash(user['password'], password):
        return jsonify({'success': False, 'message': 'Invalid email or password!'}), 401
    
    token = jwt.encode({'email': email, 'exp': datetime.datetime.utcnow() + datetime.timedelta(hours=24)}, app.config['SECRET_KEY'], algorithm='HS256')
    
    return jsonify({'success': True, 'token': token, 'message': 'Login successful!'}), 200

@app.route('/api/user', methods=['GET'])
@token_required
def get_user(current_user):
    return jsonify({'success': True, 'user': current_user}), 200

if __name__ == '__main__':
    app.run(debug=True)
