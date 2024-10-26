// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfD0PKDkjWJ5J92B4_ZQja4dSVc61HeuA",
  authDomain: "project-2-pbandj.firebaseapp.com",
  projectId: "project-2-pbandj",
  storageBucket: "project-2-pbandj.appspot.com",
  messagingSenderId: "43539123955",
  appId: "1:43539123955:web:037ba7716047227c163186",
  measurementId: "G-ZPR9804FYZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };