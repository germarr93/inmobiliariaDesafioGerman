import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBXOkSlOa2Jz797cKYPt8riVZt0daVOIPw",
  authDomain: "coderhouse-ecommerce-4baaf.firebaseapp.com",
  projectId: "coderhouse-ecommerce-4baaf",
  storageBucket: "coderhouse-ecommerce-4baaf.appspot.com",
  messagingSenderId: "1015431856764",
  appId: "1:1015431856764:web:0bda033e0cc98b9e9bfff9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
