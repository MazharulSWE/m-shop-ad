 //Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFelYJPxeGHfTPJoJeD-BHnGntXr8xb0U",
  authDomain: "shop-9caaa.firebaseapp.com",
  projectId: "shop-9caaa",
  storageBucket: "shop-9caaa.appspot.com",
  messagingSenderId: "30099418722",
  appId: "1:30099418722:web:3c67baa81838b8175fab3b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;