// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqOIv5cCEMJn1o3tDyYcWzuJ0ilEiVS84",
  authDomain: "rwandamind-connect.firebaseapp.com",
  projectId: "rwandamind-connect",
  storageBucket: "rwandamind-connect.appspot.com",
  messagingSenderId: "239282141694",
  appId: "1:239282141694:web:c3fbe7cf8acf2d3414a8af",
  measurementId: "G-GRP46P9XBQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export async function signIn(email, password) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      // Handle successful sign-in
      return userCredential.user;
    } catch (error) {
      // Handle sign-in error
      console.error("Sign-in error:", error.message);
      throw error;
    }
  }
  
  export async function signUp(email, password) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Handle successful sign-up
      return userCredential.user;
    } catch (error) {
      // Handle sign-up error
      console.error("Sign-up error:", error.message);
      throw error;
    }
 }