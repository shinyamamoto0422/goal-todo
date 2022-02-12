import { useState, useEffect } from "react";

import { v4 as uuid } from "uuid";

import * as todoData from "../apis/apiTodos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    todoData.getAllTodosData().then(todoList => {
      setTodoList([...todoList]);
    })
  }, []);

  // 完了切り替え関数
  const toggleComplete = (id, status) => {
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, complete: !status };

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) => {
        return (
          item.id !== updatedTodo.id ? item : updatedTodo
        );
      })
      setTodoList(newTodoList);
    });
  };

  // フラグ切り替え関数
  const toggleFlag = (id, status) => {
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, flag: !status };

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) => {
        return (
          item.id !== updatedTodo.id ? item : updatedTodo
        );
      })
      setTodoList(newTodoList);
    });
  };

  // todoの追加、引数は taskName, listName, priorityNum, flag, deadline, complete, todoMemo
  const addTodoListItem = (taskName, listName, todoMemo) => {
    const newTodoItem = {
      taskName: taskName,
      id: uuid(),
      listName: listName,
      priorityNum: "2",
      flag: false,
      deadline: "23:59 2020-01-01",
      complete: false,
      todoMemo: todoMemo
    };
    console.log(newTodoItem);
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([...todoList, addTodo]);
    })
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