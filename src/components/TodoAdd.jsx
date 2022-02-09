import { useState } from 'react';
import { FlagMarkType1 } from '../atomicDesign/atoms/flagMark/FlagMarkType1';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';

export const TodoAdd = ({ inputEl, tagEl, handleAddTodoListItem }) => {
  const [priorityIsShown, setPriorityIsShown] = useState(false);
  const [timeValue, setTimeValue] = useState(new Date());
  return (
    <div class="ml-24 text-white1">
      {/* textareaはtodoのtitleを入力する要素 */}
      <textarea ref={inputEl} name="" id="" cols="30" rows="5"></textarea>
      <textarea
        type="text"
        ref={tagEl}
        class="text-white2 text-size-sm text-center w-max-20 h-5"
      >
      </textarea>
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

      <textarea defaultValue="メモ" name="" id="" cols="30" rows="2"></textarea>
      <br />

      <button onClick={handleAddTodoListItem}>追加</button>
    </div>
  )
}