import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAG_702s1hnqNTaV5FIGxpYjgootXD-hvA",
  authDomain: "fin-management.firebaseapp.com",
  projectId: "fin-management",
  storageBucket: "fin-management.appspot.com",
  messagingSenderId: "66245600640",
  appId: "1:66245600640:web:aca8aa5fa5d6504fd44d65",
  measurementId: "G-CHJ8QNDYD0"
};

export const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app)
export const auth = getAuth(app);