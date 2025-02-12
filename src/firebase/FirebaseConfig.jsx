// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQSdncprt8OL1owK-OzP0lM4_i5UgQTzQ",
  authDomain: "ecommecer-eeaff.firebaseapp.com",
  projectId: "ecommecer-eeaff",
  storageBucket: "ecommecer-eeaff.firebasestorage.app",
  messagingSenderId: "425033300491",
  appId: "1:425033300491:web:a032cb96c81aa6f098650e",
  measurementId: "G-EQ2WH7SJVJ"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}