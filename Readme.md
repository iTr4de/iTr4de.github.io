# NeuroVest AI Project

## Project Structure
```
├── static/
│   ├── css/
│   │   ├── styles.css
│   ├── js/
│   │   ├── app.js
├── templates/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── dashboard.html
│   ├── contact.html
├── app.py  # Main Flask Application
├── auth_backend.py  # Authentication Logic
├── requirements.txt  # Dependencies
├── README.md  # Documentation
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
