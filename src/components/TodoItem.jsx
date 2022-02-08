import { NameTag } from "../atomicDesign/atoms/nameTag/NameTag";

export const TodoItem = ({todo, tag, deleteTodoListItem, toggleTodoListItemStatus}) => {
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  return (
    <>
      <li class="text-white1">
        {todo.content}
        <NameTag  tag={todo.tag}/>
        <button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
        <button onClick={handleDeleteTodoListItem}>削除</button>
      </li>
    </>
  )
}