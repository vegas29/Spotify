// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4kTdye3g_TZFDIW9wFf1vY28WSrRAoX8",
  authDomain: "spotify-b92b5.firebaseapp.com",
  projectId: "spotify-b92b5",
  storageBucket: "spotify-b92b5.appspot.com",
  messagingSenderId: "113977263178",
  appId: "1:113977263178:web:ba52ea454766a40b0912b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
