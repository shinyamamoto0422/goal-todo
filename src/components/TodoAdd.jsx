import { useState } from 'react';
import { FlagMarkType1 } from '../atomicDesign/atoms/flagMark/FlagMarkType1';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';

export const TodoAdd = ({ taskNameEl, listNameEl, todoMemoEl, deadlineEl, handleAddTodoListItem }) => {
  const [priorityIsShown, setPriorityIsShown] = useState(false);
  const [timeValue, setTimeValue] = useState(new Date());
  return (
    <div class="ml-8 text-white1">
      {/* textareaはtodoのtitleを入力する要素 */}

      <div>
        <p>Todoを入力</p>
        <textarea
          type='text'
          ref={taskNameEl}
          cols="1"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
        ></textarea>
        <br />
      </div>

      <div>
        <p>リストタグを入力</p>
        <textarea
          type="text"
          ref={listNameEl}
          cols="30"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
        ></textarea>
        <br />
      </div>

      <div>
        <p>締め切りを入力 例) YYYY/MM/DD hh:mm</p>
        <textarea
          type="text"
          ref={deadlineEl}
          cols="30"
          rows="1"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
        ></textarea>
        <br />
      </div>



      <div>
        <p>フラグ</p>
        {/*<FlagMarkType1 />*/}
      </div>

      <div>
        <div class="flex">
          <button onMouseOver={() => setPriorityIsShown(true)}>
            <span>優先度</span>ー
          </button>
          {priorityIsShown && (
            <PriorityThree />
          )}
        </div>
        <br />
      </div>

      <div>
        <p>メモを入力</p>
        <textarea
          type='text'
          ref={todoMemoEl}
          cols="30"
          rows="2"
          class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-xl"
        ></textarea>
        <br />
      </div>

      <button onClick={handleAddTodoListItem} class="w-12 border border-white2 rounded-xl">追加</button>
    </div>
  )
}