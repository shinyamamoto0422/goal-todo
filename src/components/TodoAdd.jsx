import { InputNameTagWithAt } from "../atomicDesign/atoms/nameTag/InputNameTagWithAt"

export const TodoAdd = ({ inputEl, tagEl, handleAddTodoListItem }) => {
  return (
    <>
    {/* textareaはtodoのtitleを入力する要素 */}
      <textarea ref={inputEl} name="" id="" cols="30" rows="5"></textarea>
      <InputNameTagWithAt  listName={tagEl}/>
      <button onClick={handleAddTodoListItem}>+todoを追加</button>
    </>
  )
}