// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSLfSGGIiR6Yln8iCHI5RydnotUvbEprk",
  authDomain: "dronesnap-afcc6.firebaseapp.com",
  projectId: "dronesnap-afcc6",
  storageBucket: "dronesnap-afcc6.firebasestorage.app",
  messagingSenderId: "270825359804",
  appId: "1:270825359804:web:453077faf0b2ac28af03b9",
  measurementId: "G-24L6F8C0VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
