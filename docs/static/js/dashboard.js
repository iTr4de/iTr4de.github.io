// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_FIREBASE_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_FIREBASE_PROJECT_ID",
    storageBucket: "YOUR_FIREBASE_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// Check if user is logged in
auth.onAuthStateChanged((user) => {
    if (user) {
        document.getElementById("user-info").innerHTML = `<p>Welcome, ${user.displayName || user.email}</p>`;
        
        // Fetch user subscription details
        db.collection("subscriptions").doc(user.uid).get().then((doc) => {
            if (doc.exists) {
                const data = doc.data();
                document.getElementById("subscription-info").innerHTML = `
                    <p><strong>Plan:</strong> ${data.plan}</p>
                    <p><strong>Status:</strong> ${data.status}</p>
                    <p><strong>Next Billing Date:</strong> ${data.nextBillingDate}</p>
                    <button class="btn" onclick="changeSubscription('individual')">Upgrade to Individual</button>
                    <button class="btn" onclick="changeSubscription('corporate')">Upgrade to Corporate</button>
                    <button class="btn" onclick="changeSubscription('free')">Downgrade to Free</button>
                `;
            } else {
                document.getElementById("subscription-info").innerHTML = `<p>No active subscription found.</p>`;
            }
        }).catch((error) => {
            console.error("Error fetching subscription details:", error);
        });
    } else {
        window.location.href = "/login.html"; // Redirect to login if not logged in
    }
});

// Change subscription plan function
function changeSubscription(newPlan) {
    auth.onAuthStateChanged((user) => {
        if (user) {
            db.collection("subscriptions").doc(user.uid).set({
                plan: newPlan,
                status: "Active",
                nextBillingDate: "Next Month"
            }, { merge: true })
            .then(() => {
                document.getElementById("subscription-info").innerHTML += `<p>Subscription updated to ${newPlan} plan.</p>`;
            })
            .catch((error) => {
                console.error("Error updating subscription:", error);
            });
        }
    });
}
