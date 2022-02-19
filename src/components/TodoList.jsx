import { TodoItem } from "./TodoItem"
export const TodoList = ({ todos, deleteTodoListItem, toggleComplete, toggleFlag, setEditModeFlag, setEditTargetTodo }) => {
  return (
    <>
      <ul>
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodoListItem={deleteTodoListItem}
            toggleComplete={toggleComplete}
            toggleFlag={toggleFlag}
            setEditModeFlag={setEditModeFlag}
            setEditTargetTodo={setEditTargetTodo}
          />
        ))}
      </ul>
    </>
  )
}