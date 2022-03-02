// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
  } from 'firebase/firestore';

  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCp1IrG6S9gkSmDyx3qNq-rIdBBxVjJDLA",
  authDomain: "photo-tagging-game-9444f.firebaseapp.com",
  projectId: "photo-tagging-game-9444f",
  storageBucket: "photo-tagging-game-9444f.appspot.com",
  messagingSenderId: "611765499608",
  appId: "1:611765499608:web:bd59cb16f6acd15e4d89ad",
  measurementId: "G-M9LBP2KJZ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

