// Import the Firebase SDK functions that you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getAuth } from "firebase/auth"; // Firebase Auth for authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxdusBfRM3gfVHPQiZZBCwqYz7-e6qifk",
  authDomain: "harbour-official.firebaseapp.com",
  projectId: "harbour-official",
  storageBucket: "harbour-official.appspot.com",
  messagingSenderId: "5091895313",
  appId: "1:5091895313:web:b0b2b0189d2fad03e6a9b0",
  measurementId: "G-91DHMX931L",
};

// Initialize Firebase (check if not already initialized in case of SSR)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const analytics = (async () => (await isSupported() ? getAnalytics(app) : null))(); // Analytics is optional and checks if supported
const db = getFirestore(app); // Firestore database
const auth = getAuth(app); // Authentication

// Export initialized Firebase services for use in the app
export { app, analytics, db, auth };
