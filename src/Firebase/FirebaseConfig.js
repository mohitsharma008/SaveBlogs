// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9sjWTlWK3qFCkevaPm1vj81-wf560KUY",
  authDomain: "streamy-325306.firebaseapp.com",
  projectId: "streamy-325306",
  storageBucket: "streamy-325306.appspot.com",
  messagingSenderId: "490540356760",
  appId: "1:490540356760:web:3506316d0fe4a9ce01eced"
};

// Initialize Firebase
const firebasedb = initializeApp(firebaseConfig);
export default firebasedb;
