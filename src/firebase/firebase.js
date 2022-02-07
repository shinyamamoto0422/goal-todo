import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChL38tKzjF1ctPGCqciCO2zzKyDCoz7vQ",
  authDomain: "goal-todo-demo.firebaseapp.com",
  projectId: "goal-todo-demo",
  storageBucket: "goal-todo-demo.appspot.com",
  messagingSenderId: "846128099203",
  appId: "1:846128099203:web:279cf077aa15eb8e28d0b6",
  measurementId: "G-25Z0G84020"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;