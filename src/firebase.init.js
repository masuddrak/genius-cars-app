// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQomoUG5i1WptnWq4gaWib4hxwrBYE2jI",
  authDomain: "genius-cars.firebaseapp.com",
  projectId: "genius-cars",
  storageBucket: "genius-cars.appspot.com",
  messagingSenderId: "700516129552",
  appId: "1:700516129552:web:f5922ce626804879b2e395"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;