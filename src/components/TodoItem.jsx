export const TodoItem = ({todo, deleteTodoListItem, toggleTodoListItemStatus}) => {
  const handleDeleteTodoListItem = () => deleteTodoListItem(todo.id);
  const handleToggleTodoListItemStatus = () => toggleTodoListItemStatus(todo.id, todo.done);
  return (
    <>
      <li>
        {todo.content}
        <button onClick={handleToggleTodoListItemStatus}>{todo.done ? "未完了リストへ" : "完了リストへ"}</button>
        <button onClick={handleDeleteTodoListItem}>削除</button>
      </li>
    </>
  )
}