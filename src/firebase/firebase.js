import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvleTWAg1yGtILzR0NkmaYNpqeBuq2el8",
  authDomain: "goal-todo-fc64a.firebaseapp.com",
  projectId: "goal-todo-fc64a",
  storageBucket: "goal-todo-fc64a.appspot.com",
  messagingSenderId: "972087621409",
  appId: "1:972087621409:web:9c863ddd0f9ee4b484f060",
  measurementId: "G-062T99YDJX"
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;