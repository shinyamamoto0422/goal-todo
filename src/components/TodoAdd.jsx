import { useState } from 'react';
import { FlagMarkType2 } from '../atomicDesign/atoms/flagMark/FlagMarkType2';
import { CompleteMark2 } from '../atomicDesign/molecules/CompleteMark2';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';

// todoの追加、引数は taskName, listName, priorityNum, flag, deadline, complete, todoMemo
export const TodoAdd = ({ taskNameEl, listNameEl, setPriorityNum, setFlag, deadlineEl, setComplete, todoMemoEl, handleAddTodoListItem }) => {
  //const [priorityIsShown, setPriorityIsShown] = useState(false);
  //const [timeValue, setTimeValue] = useState(new Date());
  return (
    <div class="ml-8 text-white1">
      {/* textareaはtodoのtitleを入力する要素 */}
      <p class="text-white2">入力モード</p>
      <div class="flex">
        <div>
          <CompleteMark2 setComplete={setComplete} />
        </div>
        <div>
          <FlagMarkType2 setFlag={setFlag} />
        </div>
      </div>

      <div>
        <p class="text-white2">Todoを入力</p>
        <textarea
          type='text'
          ref={taskNameEl}
          cols="1"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
        ></textarea>
        <br />
      </div>

      <div>
        <p class="text-white2">期限を入力 例) YYYY/MM/DD hh:mm</p>
        <textarea
          type="text"
          ref={deadlineEl}
          cols="30"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
        ></textarea>
        <br />
      </div>

      <div>
        <p class="text-white2">リストタグを入力</p>
        <textarea
          type="text"
          ref={listNameEl}
          cols="30"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
        ></textarea>
        <br />
      </div>

      <div>
        <div class="flex">
          <span class="text-white2">優先度</span>ー
          <PriorityThree setPriorityNum={setPriorityNum} />
        </div>
        <br />
      </div>

      <div>
        <p class="text-white2">メモを入力</p>
        <textarea
          type='text'
          ref={todoMemoEl}
          cols="30"
          rows="2"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
        ></textarea>
        <br />
      </div>

      <button onClick={handleAddTodoListItem} class="text-white2 w-12 border border-white2 rounded-md">追加</button>
    </div>
  )
}