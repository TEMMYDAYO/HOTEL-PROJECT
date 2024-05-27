// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgs1pywk04Yvil3dFQvm73o2bMEEsD-ic",
  authDomain: "react-login-project-feea4.firebaseapp.com",
  projectId: "react-login-project-feea4",
  storageBucket: "react-login-project-feea4.appspot.com",
  messagingSenderId: "1069152477113",
  appId: "1:1069152477113:web:9aaa189f602a90ce106068",
  measurementId: "G-72D43JK1N5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Auth = getAuth(app);
export const  Provider= new GoogleAuthProvider();
