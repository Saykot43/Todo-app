// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCpsCPXIDQXzt3DTuJGzIInVOqxmlrQ1FA",
    authDomain: "todo-app-638ad.firebaseapp.com",
    projectId: "todo-app-638ad",
    storageBucket: "todo-app-638ad.appspot.com",
    messagingSenderId: "346718354787",
    appId: "1:346718354787:web:7e334df4719daeabeb6756"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;