import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCyEFzzalG5cevw7kcrgnirRUgJpVpkFgU",
  authDomain: "chat-wave-abdcd.firebaseapp.com",
  projectId: "chat-wave-abdcd",
  storageBucket: "chat-wave-abdcd.appspot.com",
  messagingSenderId: "837763178263",
  appId: "1:837763178263:web:cd1ad1cf70bbd63cc12152",
  measurementId: "G-PDKWES0GD8",
};

export const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
