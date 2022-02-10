import { useState } from 'react';
import { FlagMarkType1 } from '../atomicDesign/atoms/flagMark/FlagMarkType1';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';

export const TodoAdd = ({ taskNameEl, listNameEl, todoMemoEl, handleAddTodoListItem }) => {
  const [priorityIsShown, setPriorityIsShown] = useState(false);
  const [timeValue, setTimeValue] = useState(new Date());
  return (
    <div class="ml-24 text-white1">
      {/* textareaはtodoのtitleを入力する要素 */}
      <p>Todoを入力</p>
      <textarea
        type='text'
        ref={taskNameEl}
        cols="1"
        rows="1"
        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
      ></textarea>
      <br />

      <p>リストタグを入力</p>
      <textarea
        type="text"
        ref={listNameEl}
        cols="30"
        rows="1"
        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
      ></textarea>
      <br />

      <p>メモを入力</p>
      <textarea
        type='text'
        ref={todoMemoEl}
        cols="30"
        rows="2"
        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
      ></textarea>
      <br />

      <p>フラグ</p>
      <FlagMarkType1 />

      <div class="flex">
        <button
          onMouseOver={() => setPriorityIsShown(true)}
        >
          <span>優先度</span>
          ー
        </button>
        {priorityIsShown && (
          <PriorityThree />
        )}
      </div>
      <br />

      <button onClick={handleAddTodoListItem} class="w-12 border border-white2 rounded-xl">追加</button>
    </div>
  )
}