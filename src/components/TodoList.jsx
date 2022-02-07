import { TodoItem } from "./TodoItem"
export const TodoList = ({todos,deleteTodoListItem, toggleTodoListItemStatus}) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodoListItem={deleteTodoListItem}
            toggleTodoListItemStatus={toggleTodoListItemStatus}
          />
        ))}
      </ul>
    </>
  )
}