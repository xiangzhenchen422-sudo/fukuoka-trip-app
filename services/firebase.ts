import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
// Replace the values below with your actual Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvjB1Rj8wUCGAGGPMYv0TvkPRS5H9kmI",
  authDomain: "fukuoka-trip-app-abf73.firebaseapp.com",
  projectId: "fukuoka-trip-app-abf73",
  storageBucket: "fukuoka-trip-app-abf73.firebasestorage.app",
  messagingSenderId: "222354731180",
  appId: "1:222354731180:web:34c18a74239c92ae91ef09"
};

// Initialize Firebase
// Added a check to prevent multiple initializations in some hot-reload environments
let app;
try {
  app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Firebase initialization error (check your config):", error);
}

export const db = app ? getFirestore(app) : null;
export const auth = app ? getAuth(app) : null;

export default app;
