// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAXN5250Am0_toTLHG_KWBf8Kmzxv5Dt6w",
  authDomain: "fir-8eedf.firebaseapp.com",
  databaseURL: "https://fir-8eedf-default-rtdb.firebaseio.com",
  projectId: "fir-8eedf",
  storageBucket: "fir-8eedf.appspot.com",
  messagingSenderId: "349683225373",
  appId: "1:349683225373:web:7af8cd13d04e1a90a0c7f4",
  measurementId: "G-YNH0LG7G88"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);