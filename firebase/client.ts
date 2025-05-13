import { initializeApp, getApp, getApps } from "firebase/app";

import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


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
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);