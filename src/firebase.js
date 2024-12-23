import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCrg3RmTwwdWVl66WV0S1l1iUz_H0QPLPk",
  authDomain: "web-dev-c8bf6.firebaseapp.com",
  projectId: "web-dev-c8bf6",
  storageBucket: "web-dev-c8bf6.firebasestorage.app",
  messagingSenderId: "978946576000",
  appId: "1:978946576000:web:3b1c369908984217f22065"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get Auth instance
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider, signInWithPopup };
