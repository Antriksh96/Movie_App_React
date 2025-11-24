// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDgPL_j9HeDYRvjF8jily3G4DkygpUsN0I",
  authDomain: "react-movie-app-fbef8.firebaseapp.com",
  projectId: "react-movie-app-fbef8",
  storageBucket: "react-movie-app-fbef8.firebasestorage.app",
  messagingSenderId: "447732803748",
  appId: "1:447732803748:web:8fbfa1a0a39bdaf31d5e31",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const db = getFirestore(app);
// const navigate = useNavigate()

async function signup(name, email, password) {
  console.log("sign up function called");
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      email,
      authProvider: "local",
    });
  } catch (error) {
    console.log(error);
    alert(error);
  }
}

async function login(email, password) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log("LOGIN SUCCESS", res.user);
    console.log("CURRENT USER AFTER LOGIN:", auth.currentUser);
  } catch (error) {
    console.log("LOGIN ERROR:", error.code, error.message);
    alert(error.message);
  }
}

async function logout() {
  signOut(auth);
}

export { auth, db, signup, login, logout };
