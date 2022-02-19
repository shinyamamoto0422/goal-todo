import { getAuth } from "firebase/auth";
import { collection, doc, setDoc, deleteDoc, updateDoc, getDoc, getDocs, query, onSnapshot } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase/firebase";

export const getAllTodosData = async () => {
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
    await setDoc(doc(todosRef, uid, "usertodos", id), todo);
};


export const deleteTodoData = async (id, todo) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    await deleteDoc(doc(todosRef, uid, "usertodos", id));
};

export const updateTodoData = async (id, todo) => {
    const auth = getAuth();
    const user = auth.currentUser;
    const uid = user.uid
    const todosRef = collection(db, "todos");
    await updateDoc(doc(todosRef, uid, "usertodos", id), todo);
};