document.addEventListener("DOMContentLoaded", function () {
    console.log("App.js loaded");

    // Simulated API response for login and registration
    const mockUserData = {
        success: true,
        user: { name: "John Doe", email: "johndoe@example.com" }
    };

    // Handle login simulation
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Simulated authentication
            if (email === "johndoe@example.com" && password === "password123") {
                localStorage.setItem("currentUser", JSON.stringify(mockUserData.user));
                document.getElementById("response-message").innerText = "Login successful! Redirecting...";
                setTimeout(() => window.location.href = "dashboard.html", 1000);
            } else {
                document.getElementById("response-message").innerText = "Invalid email or password.";
            }
        });
    }

    // Handle registration simulation
    const registerForm = document.getElementById("register-form");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            // Simulate registration and auto-login
            const newUser = { name, email };
            localStorage.setItem("currentUser", JSON.stringify(newUser));
            document.getElementById("response-message").innerText = "Registration successful! Redirecting...";
            setTimeout(() => window.location.href = "dashboard.html", 1000);
        });
    }

    // Load user data for dashboard if applicable
    if (window.location.pathname.endsWith("dashboard.html")) {
        const currentUser = JSON.parse(localStorage.getItem("currentUser"));
        if (currentUser) {
            document.getElementById("user-info").innerHTML = `<p>Welcome, ${currentUser.name}</p>`;
        } else {
            window.location.href = "login.html";
        }
    }
});
