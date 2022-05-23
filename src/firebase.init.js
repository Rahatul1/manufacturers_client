// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR2Y6LfLeQWZxMte2aLa2IHbtbNkELK3w",
    authDomain: "manufacturers-website-85684.firebaseapp.com",
    projectId: "manufacturers-website-85684",
    storageBucket: "manufacturers-website-85684.appspot.com",
    messagingSenderId: "881437157991",
    appId: "1:881437157991:web:61af1dad562390d98782c2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
