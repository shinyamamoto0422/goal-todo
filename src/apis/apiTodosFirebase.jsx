import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, Timestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";


/*
export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
  // const todosData = collection(db, "todosData");
  // return todosData;

  // useCollection
  // value.loadingDataで返す
  
};
*/

export const addTodoData = async (id, todo) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    const response = await setDoc(doc(todosRef, uid, "usertodos", id), todo);
    return response.data;
};

/*
export const deleteTodoData = async (id, todo) => {
  const response = await axios.delete(`${todoDataUrl}/${id}`);
  return response.data;
}

export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
}
*/