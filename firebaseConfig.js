// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOIgrAXkJkioJGs8083PrVp8yM6FchOew",
  authDomain: "autenticacao-login-8569c.firebaseapp.com",
  projectId: "autenticacao-login-8569c",
  storageBucket: "autenticacao-login-8569c.firebasestorage.app",
  messagingSenderId: "786101768648",
  appId: "1:786101768648:web:578e35098397c804a9b0fd",
  measurementId: "G-P92CPXP0QG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// Initialize Firebase Authentication do Firebase e criar uma referencia para gerenciamento de autenticação
//(login, logout, etc.)
export const auth = getAuth(app);