// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq7d7aE4j-1QfI80UW1YcpqM1Bx4VbmX0",
  authDomain: "codevillechat.firebaseapp.com",
  projectId: "codevillechat",
  storageBucket: "codevillechat.appspot.com",
  messagingSenderId: "659279065590",
  appId: "1:659279065590:web:73bbe09098ab755a3017d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 
export const db = getFirestore(app)
export const storage = getStorage(app)