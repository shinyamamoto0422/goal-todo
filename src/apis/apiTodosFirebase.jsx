import { getAuth } from "firebase/auth";
import { collection, doc, setDoc, deleteDoc, updateDoc, getDoc, getDocs, query, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

export const GetAllTodosData = async () => {
    /*
    // onSnapshotが分からない!!
    const [alltodos, setAlltodos] = useState([]);
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    //db, "todos", uid, "usertodos"
    const todosRef = collection(db, "todos", uid, "usertodos");
    //const response = await getDocs(todosRef);
    // リストにまとめてからreturn
    onSnapshot(todosRef, (response) => {
        response.forEach((doc) => {
            console.log(doc.data())
            //alltodos.push(doc.data());
            setAlltodos([...doc.data()])
        })
    })
    console.log("alltodos :", alltodos)
    return alltodos;
    */
    const alltodos = [];
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid;
    const todosRef = collection(db, "todos", uid, "usertodos");
    const response = await getDocs(todosRef);
    // リストにまとめてからreturn
    response.forEach((doc) => {
        //console.log(doc.data())
        alltodos.push(doc.data())
    })
    return alltodos;
};

export const addTodoData = async (id, todo) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    const response = await setDoc(doc(todosRef, uid, "usertodos", id), todo);
    return response.data;
};


export const deleteTodoData = async (id, todo) => {
    // const response = await axios.delete(`${todoDataUrl}/${id}`);
    // return response.data;
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    const response = await deleteDoc(doc(todosRef, uid, "usertodos", id));
    return response.data;
}

export const updateTodoData = async (id, todo) => {
    // const response = await axios.put(`${todoDataUrl}/${id}`, todo);
    // return response.data;
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    const response = await updateDoc(doc(todosRef, uid, "usertodos", id), todo);
    return response.data;
}