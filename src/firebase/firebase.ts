// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbXsS-nxFtF5lSbOz99jdQ8bl_wqjVsms",
  authDomain: "projectm-3780c.firebaseapp.com",
  projectId: "projectm-3780c",
  storageBucket: "projectm-3780c.firebasestorage.app",
  messagingSenderId: "315745607112",
  appId: "1:315745607112:web:7201bd42b124720d5e74fd",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
