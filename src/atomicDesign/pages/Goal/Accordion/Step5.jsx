import { useState, useRef } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import Step5Mattering from "../../../../assets/Goal/Step5Mattering.svg";

export const Step5 = ({ goal, updateGoal }) => {
  const [isActive, setIsActive] = useState(false);
  const [ color, setColor ] = useState("bg-white1 hover:bg-white2");
  const [ textColor, setTextColor ] = useState("text-black1");

  const [routine, setRoutine] = useState("");

  // 注意！！！ LifeGoalEl1 と LifeGoalEl2 は機能していません。
  // 本当はroutineが三つであれば、決定を押した時に、storeにroutine1, routine2, routine3を追加するようにします。
  const LifeGoalEl1 = useRef("");
  const LifeGoalEl2 = useRef("");
  const LifeGoalEl3 = useRef("");
  const handleOnclickAddLifeGoal = () => {
    if ( LifeGoalEl1.current.value === "" 
    || LifeGoalEl2.current.value === "" 
    || LifeGoalEl3.current.value === "") return;
    updateGoal(goal.id, LifeGoalEl1.current.value);
    updateGoal(goal.id, LifeGoalEl2.current.value);
    updateGoal(goal.id, LifeGoalEl3.current.value);


    // 注意！！表示上では三つ入力すると左に全部反映されますが、storenには最後の値しか渡っていません。
    const allRoutine = `${LifeGoalEl1.current.value} ・ ${LifeGoalEl2.current.value} ・ ${LifeGoalEl3.current.value}`;
    setRoutine(allRoutine);

    // LifeGoalEl1.current.value = "";
    // LifeGoalEl2.current.value = "";
    // LifeGoalEl3.current.value = "";
  };

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
          <p class={`text-2xl font-semibold mr-1 ${textColor}`}>❺</p>
          <p class={`text-xl font-medium ${textColor}`}>目標に近づくためのルーティンを作る</p>
              <div class="absolute right-1">
                {
                  isActive ? 
                  <ChevronRightIcon class="h-6 text-white1" />
                  : 
                  <ChevronDownIcon class="h-6 text-black1" />
                }
              </div>
        </div>

        <div class="text-center">
                <p class="text-purple4">{routine}</p>
        </div>
      </div>
      {isActive && 
        <div>
          <div class="absolute ml-16 left-1/3 -top-1 mt-1 w-3/6 h-full border border-white3 rounded-lg
                      bg-white1 border border-white3 p-1"
          >
            <div class="h-full flex flex-col justify-center items-center">
              <p class="text-black1 text-md font-semibold text-center">最後に、目標に一歩づつ近づくために<br/>習慣化すること（ルーティン行動）を<br/>3つ上げましょう！</p>
              <input ref={LifeGoalEl1} placeholder={""} type="text" class="w-3/4 h-8 mb-1 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
              <input ref={LifeGoalEl2} placeholder={""} type="text" class="w-3/4 h-8 mb-1 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
              <input ref={LifeGoalEl3} placeholder={""} type="text" class="w-3/4 h-8 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
            </div>

            <div class="absolute w-1/2 -bottom-0 left-0">
              <img src={Step5Mattering} alt="matteringLeft" />
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