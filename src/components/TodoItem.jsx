import { OneTask } from "../atomicDesign/organisms/OneTask";

export const TodoItem = ({ todo, deleteTodoListItem, toggleComplete, toggleFlag, setEditModeFlag, setEditTargetTodo }) => {
  //const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  //const handletoggleComplete = () => toggleComplete(todo.id, todo.complete);
  //console.log("todo=" + todo)
  return (
    <>
      <OneTask
        todo={todo}
        deleteTodoListItem={deleteTodoListItem}
        toggleComplete={toggleComplete}
        toggleFlag={toggleFlag}
        setEditModeFlag={setEditModeFlag}
        setEditTargetTodo={setEditTargetTodo}
      />
      {/** <li class="text-white1">
        {todo.content}
        <NameTag  tag={todo.tag}/>
        <button onClick={handletoggleComplete}>{todo.complete ? "未完了リストへ" : "完了リストへ"}</button>
        <button onClick={handleDeleteTodoListItem}>削除</button>
      </li> */}
    </>
  )
}