// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARN0FJ23nLvIKqKfanMbD9OBh1QPb8Vz4",
  authDomain: "ms9-mdall-practice.firebaseapp.com",
  projectId: "ms9-mdall-practice",
  storageBucket: "ms9-mdall-practice.firebasestorage.app",
  messagingSenderId: "386903011501",
  appId: "1:386903011501:web:7df060f36f42a2cb291624"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);