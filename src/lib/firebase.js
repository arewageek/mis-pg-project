// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBirG0KyVEG9vKcbKaSuR6USbLg8Vi4JAc",
  authDomain: "mis-its.firebaseapp.com",
  projectId: "mis-its",
  storageBucket: "mis-its.appspot.com",
  messagingSenderId: "250739249190",
  appId: "1:250739249190:web:689016bb95726fb49f96e7",
  measurementId: "G-F3PR7P1Z1Q",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
