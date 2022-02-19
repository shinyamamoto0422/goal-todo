import { useState } from 'react';
import { FlagMarkType1 } from '../atomicDesign/atoms/flagMark/FlagMarkType1';
import { FlagMarkType2 } from '../atomicDesign/atoms/flagMark/FlagMarkType2';
import { CompleteMark } from '../atomicDesign/molecules/CompleteMark';
import { CompleteMark2 } from '../atomicDesign/molecules/CompleteMark2';
import { PriorityThree } from '../atomicDesign/molecules/priority/PriorityThree';

// todoの追加、引数は taskName, listName, priorityNum, flag, deadline, complete, todoMemo
export const TodoEdit = ({ editTaskNameEl, editListNameEl, setEditPriorityNum, setEditFlag, editDeadlineEl, setEditComplete, editTodoMemoEl, handleUpdateTodoListItem, editTargetTodo }) => {
    //const [priorityIsShown, setPriorityIsShown] = useState(false);
    //const [timeValue, setTimeValue] = useState(new Date());
    console.log(editTargetTodo)

    //----------------------------------------問題点-------------------------------------
    // defaultvalue を設定した場合、１度目の内容が表示されてロックし、２度目以降のtodo内容が表示されない
    //----------------------------------------------------------------------------------

    return (
        <div class="ml-8 text-white1">
            {/* textareaはtodoのtitleを入力する要素 */}
            <p class="text-white2">編集モード</p>
            <div class="flex">
                <div>
                    <CompleteMark2 setComplete={setEditComplete} />
                </div>
                <div>
                    <FlagMarkType2 setFlag={setEditFlag} />
                </div>
                <p>変更前 :</p>
                <CompleteMark todo={editTargetTodo} />
                <FlagMarkType1 todo={editTargetTodo} />
            </div>

            <div>
                <p class="text-white2">Todoを入力</p>
                <div class="flex">
                    <textarea
                        type='text'
                        ref={editTaskNameEl}
                        cols="1"
                        rows="1"
                        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
                    ></textarea>
                    <p>変更前：{editTargetTodo.taskName}</p>
                </div>
                <br />
            </div>

            <div>
                <p class="text-white2">期限を入力 例) YYYY/MM/DD hh:mm</p>
                <div class="flex">
                    <textarea
                        type="text"
                        ref={editDeadlineEl}
                        cols="30"
                        rows="1"
                        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
                    ></textarea>
                    <p>変更前：{editTargetTodo.deadline}</p>
                </div>
                <br />
            </div>

            <div>
                <p class="text-white2">リストタグを入力</p>
                <div class="flex">
                    <textarea
                        type="text"
                        ref={editListNameEl}
                        cols="30"
                        rows="1"
                        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
                    ></textarea>
                    <p>変更前：{editTargetTodo.listName}</p>
                </div>
                <br />
            </div>

            <div>
                <div class="flex">
                    <span class="text-white2">優先度</span>ー
                    <PriorityThree setPriorityNum={setEditPriorityNum} />
                    <p>変更前：{editTargetTodo.priorityNum}</p>
                </div>
                <br />
            </div>

            <div>
                <p class="text-white2">メモを入力</p>
                <div class="flex">
                    <textarea
                        type='text'
                        ref={editTodoMemoEl}
                        cols="30"
                        rows="2"
                        class="text-white2 text-size-sm text-center w-36 mx-2 bg-black1 border border-white2 rounded-md"
                    ></textarea>
                    <p>変更前：{editTargetTodo.todoMemo}</p>
                </div>
                <br />
            </div>

            <button onClick={handleUpdateTodoListItem} class="text-white2 w-12 border border-white2 rounded-md">保存</button>
        </div>
    )
}