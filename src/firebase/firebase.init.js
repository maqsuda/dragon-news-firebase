// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTLnv8FhUFm_2-fRF2MLsv7P-DRcwLAqA",
  authDomain: "dragon-news-breaking-f9daf.firebaseapp.com",
  projectId: "dragon-news-breaking-f9daf",
  storageBucket: "dragon-news-breaking-f9daf.firebasestorage.app",
  messagingSenderId: "66364232065",
  appId: "1:66364232065:web:cefd942b880ff225cf9880",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
