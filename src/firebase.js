
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDqOJqsUB620DvX6vcle8Q2O5IghMCJkL0",
  authDomain: "adminx-6f8f2.firebaseapp",
  projectId: "adminx-6f8f2",
  storageBucket:"adminx-6f8f2.appspot.com" ,
  messagingSenderId:"540820152399" ,
  appId: "1:540820152399:web:50182b691d4acf2337ca3a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export the getAuth as auth

export const auth=getAuth()