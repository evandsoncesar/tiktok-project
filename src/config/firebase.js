// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLHmD6bhamGukvh2KqliQuLk6jnZCggkA",
  authDomain: "tiktok-project-dc073.firebaseapp.com",
  projectId: "tiktok-project-dc073",
  storageBucket: "tiktok-project-dc073.appspot.com",
  messagingSenderId: "45280490384",
  appId: "1:45280490384:web:a8568b212501b9fa517915"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getFirestore(app);

export default db;