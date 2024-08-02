// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoz6Bs7cs4qUVNYO_mAcEtRNOk4KjDDmA",
  authDomain: "shopsphere-3236c.firebaseapp.com",
  projectId: "shopsphere-3236c",
  storageBucket: "shopsphere-3236c.appspot.com",
  messagingSenderId: "1083853975928",
  appId: "1:1083853975928:web:dd41aca1c66d560246d88d",
  measurementId: "G-VELLJLC6JX"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app)

module.exports = { firebase, auth }