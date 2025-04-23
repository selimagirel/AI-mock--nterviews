import {  getApps, initializeApp, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCoc296UjYbJsho0ufBk7v-TI25z-u4lvU",
  authDomain: "prepwise-de08d.firebaseapp.com",
  projectId: "prepwise-de08d",
  storageBucket: "prepwise-de08d.firebasestorage.app",
  messagingSenderId: "214440683286",
  appId: "1:214440683286:web:cd0db251ed2afc0c61d237",
  measurementId: "G-YGEL4Y8NV9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);