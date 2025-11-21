// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyDQXBnwzIgg_NficPIfuijw769izlPKHSM",
  authDomain: "login-awan.firebaseapp.com",
  projectId: "login-awan",
  storageBucket: "login-awan.firebasestorage.app",
  messagingSenderId: "454165459770",
  appId: "1:454165459770:web:3c528748f98d696e29d603"
};

// Init
const app = initializeApp(firebaseConfig);

// Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const functions = getFunctions(app);

export default app;
