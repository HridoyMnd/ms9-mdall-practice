// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE2i2ngOyq6YFZhGU7jvnbZrksTWLct2Y",
  authDomain: "emailpassword-auth-3bc90.firebaseapp.com",
  projectId: "emailpassword-auth-3bc90",
  storageBucket: "emailpassword-auth-3bc90.firebasestorage.app",
  messagingSenderId: "137295901323",
  appId: "1:137295901323:web:b9d590f4e2356ad0585a8e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);