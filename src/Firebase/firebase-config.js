import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDI6rve90Y7t-KAbVEWANaLdbh9WBKHwQw",
  authDomain: "delivery-squad-af618.firebaseapp.com",
  projectId: "delivery-squad-af618",
  storageBucket: "delivery-squad-af618.appspot.com",
  messagingSenderId: "742869027252",
  appId: "1:742869027252:web:e1288372012bca81e80ae1",
  measurementId: "G-C29ZJE8TV9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
