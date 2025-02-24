# NeuroVest AI - Static Version (GitHub Pages Compatible)

## Project Structure
```
/ (root)
│
├── index.html         // Main landing page
├── login.html         // Login page
├── register.html      // Registration page
├── dashboard.html     // Dashboard for authenticated users
├── contact.html       // Contact form integrated with Firebase
├── subscription.html  // Subscription management with inline JS
│
├── styles.css         // Global styles for the website
├── app.js             // Consolidated JS for login/registration and user data handling
├── contact.js         // Firebase integration for the contact form
└── dashboard.js       // Dashboard functionalities (user auth and subscription)
```

Key Points:
	•	Index File: The presence of index.html in the root ensures that GitHub Pages will serve it as the homepage.
	•	Relative Paths: All CSS and JavaScript files are referenced via relative paths (e.g., ./styles.css), making the site self-contained.
	•	Flat Structure: A flat file structure simplifies navigation and maintenance, reducing potential path conflicts.
	•	Self-contained Application: Each page is a complete HTML document with its own navigation, ensuring smooth transitions and consistent user experience.
