// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSiOILvsp6Brf3aQBPkr7jFsdUUWn4Mxw",
  authDomain: "panic-button-98dca.firebaseapp.com",
  databaseURL: "https://panic-button-98dca-default-rtdb.firebaseio.com",
  projectId: "panic-button-98dca",
  storageBucket: "panic-button-98dca.appspot.com",
  messagingSenderId: "588777391598",
  appId: "1:588777391598:web:6319fc8ad48bd053f43aff",
  measurementId: "G-KJXRL22PNY"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();