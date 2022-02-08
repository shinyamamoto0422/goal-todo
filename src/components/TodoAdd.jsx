export const TodoAdd = ({ inputEl, tagEl, handleAddTodoListItem }) => {
  return (
    <>
    {/* textareaはtodoのtitleを入力する要素 */}
      <textarea ref={inputEl} name="" id="" cols="30" rows="5"></textarea>
      <textarea 
          type="text"
          ref={tagEl}
          class="text-white2 text-size-sm text-center w-max-20 h-5"
      >
      </textarea>
      <button onClick={handleAddTodoListItem}>+todoを追加</button>
    </>
  )
}