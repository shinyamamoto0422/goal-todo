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

  // 優先度変更関数？？？？
  const togglePriority = (id, priorityNum) => {
    const newTodoList = [];
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, priority: priorityNum, updatedAt: Timestamp.now() };
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
    // todoItemがusersetting以外、flag→usersettingに変更、updatedAt:Timestamp.now()はそのまま
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
  const addTodoListItem = (taskName, listName, priorityNum, flag, deadline, complete, todoMemo) => {
    const id = uuid()
    const newTodoItem = {
      taskName: taskName,
      id: id,
      listName: listName,
      priorityNum: priorityNum,
      flag: flag,
      deadline: deadline,
      complete: complete,
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

  const updateTodoListItem = (id, taskName, listName, priorityNum, flag, deadline, complete, todoMemo) => {
    const newTodoList = [];
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = {
      taskName: taskName,
      id: id,
      listName: listName,
      priorityNum: priorityNum,
      flag: flag,
      deadline: deadline,
      complete: complete,
      todoMemo: todoMemo,
      uid: uid,
      updatedAt: Timestamp.now(),
      deletedAt: ""
    };
    // console.log(newTodoItem);
    todoFirebaseData.updateTodoData(id, newTodoItem);
    todoList.map((todo) => {
      if (todo.id !== newTodoItem.id) {
        newTodoList.push(todo)
      } else {
        newTodoList.push(newTodoItem)
      }
    })
    setTodoList(newTodoList);
  };

  const deleteTodoListItem = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    toggleComplete,
    toggleFlag,
    togglePriority,
    addTodoListItem,
    updateTodoListItem,
    deleteTodoListItem
  };
}