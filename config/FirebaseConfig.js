// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCROp_bb7zc8ClJ7N-qSVNS_OOzhh21sAU",
  authDomain: "cloud-vault-2b9ef.firebaseapp.com",
  projectId: "cloud-vault-2b9ef",
  storageBucket: "cloud-vault-2b9ef.appspot.com",
  messagingSenderId: "402707693992",
  appId: "1:402707693992:web:453279782db22085115d9d",
  measurementId: "G-T36GZDEB7B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);