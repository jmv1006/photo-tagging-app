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
    getDoc,
    getDocs
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

async function getCharacters(db) {
  const charactersCollection = collection(db, 'Characters Coordinates');
  const test = await getDocs(charactersCollection);
  const characterInfo = test.docs.map(thing => thing.data())
  return characterInfo;
}

async function getScores(db) {
  const leaderboardCollection = collection(db, 'leaderboard');
  const leaderboardDocs = await getDocs(leaderboardCollection);
  const scores = leaderboardDocs.docs.map(score => score.data());
  return scores;
}

async function addScoreToDB(userScore) {

  console.log(userScore);
  
  await setDoc(doc(db, 'leaderboard', `${userScore.name}`), {
    name: userScore.name,
    score: {
      minutes: userScore.score.minutes,
      seconds: userScore.score.seconds
    }
  });

}

export { getCharacters, getScores, addScoreToDB, db };