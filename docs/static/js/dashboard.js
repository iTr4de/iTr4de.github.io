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
    } else {
        window.location.href = "/login.html"; // Redirect to login if not logged in
    }
});

// Logout function
document.getElementById("logout").addEventListener("click", function () {
    auth.signOut().then(() => {
        window.location.href = "/login.html";
    }).catch((error) => {
        console.error("Logout Error:", error);
    });
});
