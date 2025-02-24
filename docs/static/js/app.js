document.addEventListener("DOMContentLoaded", function () {
    console.log("App.js loaded");

    // Handle form submission for login and registration
    document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", async function (event) {
            event.preventDefault();
            
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            const action = form.getAttribute("action");

            const response = await fetch(action, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            const messageContainer = document.getElementById("response-message");
            
            if (result.success) {
                messageContainer.innerText = "Success! Redirecting...";
                setTimeout(() => {
                    window.location.href = "/dashboard";
                }, 1000);
            } else {
                messageContainer.innerText = "Error: " + result.message;
            }
        });
    });
});
