// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJFjgtzFlFvJaSXcphNvB15kIv32OgLVA",
  authDomain: "toporionagency.firebaseapp.com",
  projectId: "toporionagency",
  storageBucket: "toporionagency.firebasestorage.app",
  messagingSenderId: "560069496212",
  appId: "1:560069496212:web:ddd58bf9005fc36c011381"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;