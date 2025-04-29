// Import the functions you need from the SDKs you need
import { initializeApp ,getApp,getApps} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB9slZnz2s4FOJEbXkagHni-H734Wqdekk",
  authDomain: "talkprepai.firebaseapp.com",
  projectId: "talkprepai",
  storageBucket: "talkprepai.firebasestorage.app",
  messagingSenderId: "1049997173044",
  appId: "1:1049997173044:web:8a815247584467165d8561",
  measurementId: "G-SZHQPGWGP4"
};

// Initialize Firebase
const app = !getApps.length? initializeApp(firebaseConfig):getApp();

export const auth = getAuth(app);
export const db=getFirestore(app);