import { useState, useEffect, useRef } from "react";

import { v4 as uuid } from "uuid";

// import * as todoData from "../apis/apiTodos";
import * as todoFirebaseData from "../apis/apiTodosFirebase";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";


export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;
  const uid = user.uid

  useEffect(() => {
    todoFirebaseData.getAllTodosData().then(firebaseTodo => {
      setTodoList(firebaseTodo);
      // console.log("todoList:", firebaseTodo);
    })
  }, []);

  // 完了切り替え関数
  const toggleComplete = (id, status) => {
    const newTodoList = [];
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, complete: !status, updatedAt: Timestamp.now() };
    todoFirebaseData.updateTodoData(id, newTodoItem)
    todoList.map((todo) => {
      if (todo.id !== newTodoItem.id) {
        newTodoList.push(todo)
      } else {
        newTodoList.push(newTodoItem)
      }
    })
    setTodoList(newTodoList);
  };

  // フラグ切り替え関数
  const toggleFlag = (id, status) => {
    const newTodoList = [];
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, flag: !status, updatedAt: Timestamp.now() };
    todoFirebaseData.updateTodoData(id, newTodoItem)
    todoList.map((todo) => {
      if (todo.id !== newTodoItem.id) {
        newTodoList.push(todo)
      } else {
        newTodoList.push(newTodoItem)
      }
    })
    setTodoList(newTodoList);
  };

  // todoの追加、引数は taskName, listName, priorityNum, flag, deadline, complete, todoMemo
  const addTodoListItem = (taskName, listName, todoMemo, deadline) => {
    const id = uuid()
    const newTodoItem = {
      taskName: taskName,
      id: id,
      listName: listName,
      priorityNum: "2",
      flag: false,
      deadline: "2023-12-31 23:59",
      complete: false,
      todoMemo: todoMemo,
      createdAt: Timestamp.now(),
      uid: uid,
      updatedAt: "",
      deletedAt: ""
    };
    // console.log(newTodoItem);
    todoFirebaseData.addTodoData(id, newTodoItem);
    setTodoList([...todoList, newTodoItem]);
  };

  const deleteTodoListItem = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    toggleComplete,
    toggleFlag,
    addTodoListItem,
    deleteTodoListItem
  };
}