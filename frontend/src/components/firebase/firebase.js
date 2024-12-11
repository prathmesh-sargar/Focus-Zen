
// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCU3qPlFxzCiAZKBzizaXvEC1lUrUnoUtg",
    authDomain: "project-hub-2c8df.firebaseapp.com",
    projectId: "project-hub-2c8df",
    storageBucket: "project-hub-2c8df.appspot.com",
    messagingSenderId: "776701708158",
    appId: "1:776701708158:web:f06cc10c210a248519d52f"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export the Firebase Auth instance
export const auth = getAuth(app);

