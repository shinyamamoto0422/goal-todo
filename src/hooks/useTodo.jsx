import { useState, useEffect } from "react";

import {v4 as uuid} from "uuid";

import * as todoData from "../apis/apiTodos";

export const useTodo = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    todoData.getAllTodosData().then(todoList => {
      setTodoList([...todoList].reverse());
    })
  }, []);

  const toggleTodoListItemStatus = (id, done) => {
    const todoItem = todoList.find(item => item.id === id);
    const newTodoItem = { ...todoItem, done: !done };

    todoData.updateTodoData(id, newTodoItem).then((updatedTodo) => {
      const newTodoList = todoList.map((item) => {
        return (
          item.id !== updatedTodo.id ? item : updatedTodo
        );
      })
      setTodoList(newTodoList);
    });
  }; 

  const addTodoListItem = (todoContent) => {
    const newTodoItem = {
      content: todoContent,
      id: uuid.v4(),
      done: false
    };
    return todoData.addTodoData(newTodoItem).then((addTodo) => {
      setTodoList([addTodo, ...todoList]);
    })
  };

  const deleteTodoListItem = (id) => {
    const newTodoList = todoList.filter(item => item.id !== id);
    setTodoList(newTodoList);
  };

  return {
    todoList,
    toggleTodoListItemStatus,
    addTodoListItem,
    deleteTodoListItem
  }

}