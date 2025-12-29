import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACazs98oPxeLZ1Omsi1bv55EAUxMA7qdY",
  authDomain: "jorge-valdez-nc.firebaseapp.com",
  projectId: "jorge-valdez-nc",
  storageBucket: "jorge-valdez-nc.firebasestorage.app",
  messagingSenderId: "954408169197",
  appId: "1:954408169197:web:dfc0c1693fd2ebaefd26e4",
  measurementId: "G-G3JTPQ06Z6",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); // Export Authentication
