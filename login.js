import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyCffMLklX8YT6Ns-Wz9_8ajTr4jp55pRf8",
    authDomain: "login-signup-18385.firebaseapp.com",
    projectId: "login-signup-18385",
    storageBucket: "login-signup-18385.appspot.com",
    messagingSenderId: "1050432810765",
    appId: "1:1050432810765:web:7c9199156f0f59bc374a44",
    measurementId: "G-4CLDH4SR7X"
};

const app = initializeApp(firebaseConfig);


var btn = document.getElementById('btn');
btn.addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            Swal.fire({
                icon: 'success',
                title: 'Logged In',
                text: 'Email Logged In successfully',
                // footer: '<a href="">Why do I have this issue?</a>'
              })
              setTimeout(()=>{

                  window.location.href = './signin.html'
              },2000)
            // ...
        })
        .catch((error) => {
			const errorMessage = error.message;
			if (errorMessage === "Firebase: Error (auth/invalid-email).") {
				alert("Invalid Email !")
			}
			else if (errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password).") {
				alert("Password should at least 6 character")
			}
			else if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
				alert("Email is Already Taken.")
			}
			else {
				console.log(errorMessage);
			}
		});
})
