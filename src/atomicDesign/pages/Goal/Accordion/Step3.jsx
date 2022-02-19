import { useState, useRef } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';

export const Step3 = ({ goal, updateGoal, step1InputGoal }) => {
  const [isActive, setIsActive] = useState(false);
  const [ color, setColor ] = useState("bg-white1 hover:bg-white2");
  const [ textColor, setTextColor ] = useState("text-black1");

  const [lifeGoal, setLifeGoal] = useState("");

  const LifeGoalEl1 = useRef("");
  const handleOnclickAddLifeGoal = () => {
    if ( LifeGoalEl1.current.value === "") return;
    updateGoal(goal.id, LifeGoalEl1.current.value);
    console.log(LifeGoalEl1.current.value);
    LifeGoalEl1.current.value = "";
  };

  const handleOnClickAddInput = () => {
    // 押すと、inputを追加する関数
  }

  return (
    <div>
      <div class={`${color} relative w-2/6 ml-16  cursor-pointer border border-white3 p-1`}
          onClick={() => {
            setIsActive(!isActive);
            setColor(isActive ? "bg-white1 hover:bg-white2 " : "bg-white3");
            setTextColor(isActive ? "text-black1" : "text-white1");
          }}
      >
        <div class="flex" >
          <p class="text-purple3 text-xl font-semibold" 
              
          >step</p>
          <p class={`text-2xl font-semibold mr-1 ${textColor}`}>❸</p>
          <p class={`text-xl font-medium ${textColor}`}>目標を細かく分割する</p>
              <div class="absolute right-1">
                {
                  isActive ? 
                  <ChevronRightIcon class="h-6 text-white1" />
                  : 
                  <ChevronDownIcon class="h-6 text-black1" />
                }
              </div>
        </div>
      </div>
      {isActive && 
        <div>
          <div class="absolute ml-16 left-1/3 -top-1 mt-1 w-3/6 h-full border border-white3 rounded-lg
                      bg-white1 border border-white3 p-1"
          >
            <div class="h-full flex flex-col justify-center items-center">
              <p class="text-black1 text-md font-md text-center mb-2">では、❶で掲げた目標を現実的な<br />レベルまで落とし込む作業に入ります。</p>
              <p class="text-black1 text-xl font-bold text-center mb-2">目標</p>
              <p class="text-black1 text-md font-semibold text-center">を叶えるために達成しないといけない<br/>中間目標はなんですか？
                <span class="text-sm font-light">（複数推奨）</span>
                <button 
                  class="bg-white2 hover:bg-white3 text-xs  text-white1 py-1 px-2 rounded-xl" 
                  onClick={handleOnClickAddInput} content={"決定"} >
                    {/* 注意！！まだ機能しません */}
                  追加
                </button> 
              </p>
              <input ref={LifeGoalEl1} placeholder={""} type="text" class="w-3/4 h-8 mb-1 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
            </div>
            <div class="absolute bottom-2 w-full text-center">
              <button 
                class="bg-purple4 hover:bg-purple3 text-white1 font-bold py-2 px-5 rounded-2xl" 
                onClick={handleOnclickAddLifeGoal} content={"決定"} >
                決定
              </button> 
            </div>
          </div>
        </div>
      }
    </div>
  )
};