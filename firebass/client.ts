// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDxlWyJiepnmsEPyrJ9JM4iDDXiPZsLcO8",
  authDomain: "prepmate-29f59.firebaseapp.com",
  projectId: "prepmate-29f59",
  storageBucket: "prepmate-29f59.firebasestorage.app",
  messagingSenderId: "413370126478",
  appId: "1:413370126478:web:925dfaf8f90de3768439df",
  measurementId: "G-55GJF5XW22"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
auth.languageCode = 'en';
export const db = getFirestore(app);
