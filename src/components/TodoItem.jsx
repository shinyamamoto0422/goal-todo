import { NameTag } from "../atomicDesign/atoms/nameTag/NameTag";

export const TodoItem = ({todo, taskName, deleteTodoListItem, toggleTodoListItemStatus}) => {
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  return (
    <>
      <li>
        {todo.content}
        <NameTag taskName={taskName}/>
        <button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
        <button onClick={handleDeleteTodoListItem}>削除</button>
      </li>
    </>
  )
}