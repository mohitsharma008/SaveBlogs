// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnKeA8fXhRY5rsvJfLD-iWri0C_jQb5m4",
  authDomain: "compucom-project.firebaseapp.com",
  projectId: "compucom-project",
  storageBucket: "compucom-project.appspot.com",
  messagingSenderId: "749270672533",
  appId: "1:749270672533:web:38e135fa32078f9f61679c",
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);
export default firebasedb;
