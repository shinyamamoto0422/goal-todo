import axios from "axios";

const todoDataUrl = "http://localhost:3100/todos";

export const getAllTodosData = async () => {
  const response = await axios.get(todoDataUrl);
  return response.data;
  // const todosData = collection(db, "todosData");
  // return todosData;

  // useCollection
  // value.loadingDataで返す
  
};

export const addTodoData = async (todo) => {
  const response = await axios.post(todoDataUrl, todo);
  return response.data;
};

export const deleteTodoData = async (id, todo) => {
  const response = await axios.delete(`${todoDataUrl}/${id}`);
  return response.data;
}

export const updateTodoData = async (id, todo) => {
  const response = await axios.put(`${todoDataUrl}/${id}`, todo);
  return response.data;
}