// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfTQiCU5oOlNVH8Of2r3uCP0FcZHqDV6A",
  authDomain: "porfolio-73b35.firebaseapp.com",
  projectId: "porfolio-73b35",
  storageBucket: "porfolio-73b35.appspot.com",
  messagingSenderId: "545774210234",
  appId: "1:545774210234:web:f92ee1f328f51e5a168683",
  measurementId: "G-1XQ40KEL6C"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

