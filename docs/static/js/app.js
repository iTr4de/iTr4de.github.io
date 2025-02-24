document.addEventListener("DOMContentLoaded", function () {
    console.log("App.js loaded");

    // Simulated API responses
    const mockUserData = {
        "success": true,
        "user": {"name": "John Doe", "email": "johndoe@example.com"}
    };

    // Handle login simulation
    document.getElementById("login-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulate authentication
        if (email === "johndoe@example.com" && password === "password123") {
            localStorage.setItem("user", JSON.stringify(mockUserData.user));
            document.getElementById("response-message").innerText = "Login successful! Redirecting...";
            setTimeout(() => window.location.href = "dashboard.html", 1000);
        } else {
            document.getElementById("response-message").innerText = "Invalid email or password.";
        }
    });

    // Handle registration simulation
    document.getElementById("register-form")?.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Simulate user registration
        localStorage.setItem("user", JSON.stringify({ name, email }));
        document.getElementById("response-message").innerText = "Registration successful! Redirecting...";
        setTimeout(() => window.location.href = "dashboard.html", 1000);
    });

    // Load user data for dashboard
    if (window.location.pathname.includes("dashboard.html")) {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            document.getElementById("user-info").innerHTML = `<p>Welcome, ${user.name}</p>`;
        } else {
            window.location.href = "login.html";
        }
    }

    // Logout
    document.getElementById("logout")?.addEventListener("click", function () {
        localStorage.removeItem("user");
        window.location.href = "login.html";
    });
});
