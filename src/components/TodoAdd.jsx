import { useState } from 'react';
import { FlagMarkType1 } from '../atomicDesign/atoms/flagMark/FlagMarkType1';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';
import 'react-modern-calendar-datepicker/lib/DatePicker.css';
import DatePicker from 'react-modern-calendar-datepicker';

export const TodoAdd = ({ inputEl, tagEl, handleAddTodoListItem }) => {
  const [ priorityIsShown, setPriorityIsShown ] = useState(false);
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
      <textarea defaultValue="メモ" name="" id="" cols="30" rows="2"></textarea>
      <DatePicker/>
      <button onClick={handleAddTodoListItem}>追加</button>
    </>
  )
}