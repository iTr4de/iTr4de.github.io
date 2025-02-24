# NeuroVest AI - Static Version (GitHub Pages Compatible)

## Project Structure
```
📂 NeuroVest-AI
├── 📂 static/               # Static assets (CSS, JS)
│   ├── 📂 css/
│   │   ├── styles.css       # Global styles
│   ├── 📂 js/
│   │   ├── app.js           # Simulated API calls for authentication
│
├── 📂 templates/            # HTML templates (served as static files on GitHub Pages)
│   ├── index.html           # Homepage
│   ├── login.html           # User login page
│   ├── register.html        # User registration page
│   ├── dashboard.html       # User dashboard (localStorage-based auth simulation)
│   ├── contact.html         # Contact form
│   ├── subscription.html    # Subscription plans
│
├── README.md                # Documentation
```

## Deployment on GitHub Pages
1. **Move the `templates/` folder content into `docs/`** (GitHub Pages requires a `docs/` folder)
   ```
   mv templates docs
   ```
2. **Ensure File Structure for GitHub Pages**
   ```
   📂 NeuroVest-AI
   ├── 📂 docs/               # Static files for GitHub Pages
   │   ├── index.html         # Homepage
   │   ├── login.html         # Login Page
   │   ├── register.html      # Register Page
   │   ├── dashboard.html     # Dashboard
   │   ├── contact.html       # Contact Page
   │   ├── subscription.html  # Subscription Page
   │   ├── 📂 static/
   │   │   ├── css/styles.css
   │   │   ├── js/app.js
   ├── README.md
   ```
3. **Push Changes to GitHub**
   ```bash
   git add .
   git commit -m "Prepare static site for GitHub Pages"
   git push origin main
   ```
4. **Enable GitHub Pages**
   - Go to **Repository Settings → Pages**
   - Set the **Source** to `docs/` folder
   - **GitHub will host your static website at** `yourusername.github.io/yourrepo/`

## Features
✅ **Simulated API Authentication (LocalStorage-based Login/Register)**  
✅ **Fully Static Website (No Flask, No Backend Required)**  
✅ **Subscription Plans UI (No Payment Gateway Yet)**  
✅ **User Dashboard (Simulated User Data via LocalStorage)**  

## Next Steps
- 🔹 **Integrate Firebase Authentication** for real auth
- 🔹 **Add Stripe/PayPal API for subscription payments**
- 🔹 **Deploy Flask Backend on Heroku/Render for API interactions**

---
🚀 **Live Demo:** [yourusername.github.io/yourrepo/](https://yourusername.github.io/yourrepo/)
