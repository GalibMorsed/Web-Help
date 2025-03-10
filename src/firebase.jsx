import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

const app = initializeApp({
  apiKey: "AIzaSyD2Fd6FuFIKtayfFMHOEp94iQj34jRqPqQ",
  authDomain: "web-help-ae0a9.firebaseapp.com",
  projectId: "web-help-ae0a9",
  storageBucket: "web-help-ae0a9.firebasestorage.app",
  messagingSenderId: "1092032953066",
  appId: "1:1092032953066:web:8d9a5b66a5574e244af593",
});

export const auth = getAuth(app);
export const db = getFirestore(app); // Initialize Firestore
export { app }; // Correctly export app
