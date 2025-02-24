// Simulated user authentication & subscription data stored in localStorage
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {
    email: "johndoe@example.com",
    name: "John Doe",
    plan: "free",
    status: "Active",
    nextBillingDate: "Next Month"
};

// Simulated login check
function checkUser() {
    if (!currentUser || !currentUser.email) {
        window.location.href = "/login.html";
    } else {
        document.getElementById("user-info").innerHTML = `<p>Welcome, ${currentUser.name}</p>`;
        loadSubscription();
    }
}

// Load subscription details
function loadSubscription() {
    document.getElementById("subscription-info").innerHTML = `
        <p><strong>Plan:</strong> ${currentUser.plan}</p>
        <p><strong>Status:</strong> ${currentUser.status}</p>
        <p><strong>Next Billing Date:</strong> ${currentUser.nextBillingDate}</p>
        <button class="btn" onclick="changeSubscription('individual')">Upgrade to Individual</button>
        <button class="btn" onclick="changeSubscription('corporate')">Upgrade to Corporate</button>
        <button class="btn" onclick="changeSubscription('free')">Downgrade to Free</button>
    `;
}

// Change subscription plan function
function changeSubscription(newPlan) {
    currentUser.plan = newPlan;
    currentUser.status = "Active";
    currentUser.nextBillingDate = "Next Month";
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    loadSubscription();
    alert(`Subscription updated to ${newPlan} plan.`);
}

// Logout function
function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "/login.html";
}

document.getElementById("logout").addEventListener("click", logout);

// Initialize
document.addEventListener("DOMContentLoaded", checkUser);
