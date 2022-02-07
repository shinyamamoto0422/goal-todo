export const TodoAdd = ({ inputEl, handleAddTodoListItem }) => {
  return (
    <>
      <textarea ref={inputEl} name="" id="" cols="30" rows="5"></textarea>
      <button onClick={handleAddTodoListItem}>+todoを追加</button>
    </>
  )
}