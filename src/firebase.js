// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBu6oAty5lllnXPHmi3Y3RvIwPFKYglbj4",
    authDomain: "challenge-f245d.firebaseapp.com",
    projectId: "challenge-f245d",
    storageBucket: "challenge-f245d.appspot.com",
    messagingSenderId: "791736644583",
    appId: "1:791736644583:web:1f4a05f640355f8f294342",
    measurementId: "G-MEB6JV32G8"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;