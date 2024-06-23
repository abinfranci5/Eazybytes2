// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBgeLWBFcHY_rX-zSKOrALW4I2DXijhaTk",
  authDomain: "expensetracker-80f78.firebaseapp.com",
  projectId: "expensetracker-80f78",
  storageBucket: "expensetracker-80f78.appspot.com",
  messagingSenderId: "123904402170",
  appId: "1:123904402170:web:6ac6450774ca4054cd1f43",
  measurementId: "G-3BHMRBGR1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export {app,auth};
