import { useState, useRef } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../../firebase/firebase';

export const Step5 = () => {
  // const auth = getAuth();
  // const user = auth.currentUser;
  // const id = user.uid;
  // const goalRef = doc(db, "goals", id);
  // console.log("goalRef:", goalRef);

  const [isActive, setIsActive] = useState(false);
  const [ color, setColor ] = useState("bg-white1 hover:bg-white2");
  const [ textColor, setTextColor ] = useState("text-black1");

  const [lifeGoal, setLifeGoal] = useState("");

  const LifeGoalEl = useRef("");
  const handleOnclickAddLifeGoal = () => {
    // if ( LifeGoalEl.current.value === "") return;
    // const newLifeGoal = [...lifeGoal, LifeGoalEl.current.value];
    // setLifeGoal(newLifeGoal);
    // setDoc(goalRef, { lifeGoal: LifeGoalEl.current.value, uid: id });
    // LifeGoalEl.current.value = "";
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
          <p class={`text-2xl font-semibold mr-1 ${textColor}`}>❹</p>
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
      </div>
      {isActive && 
        <div>
          <div class="absolute ml-16 left-1/3 -top-1 mt-1 w-3/6 h-full border border-white3 rounded-lg
                      bg-white1 border border-white3 p-1"
          >
            <div class="h-full flex flex-col justify-center items-center">
              <p class="text-black1 text-md font-semibold text-center">最後に、目標に一歩づつ近づくために<br/>習慣化すること（ルーティン行動）を<br/>3つ上げましょう！</p>
              <input ref={LifeGoalEl} placeholder={""} type="text" class="w-3/4 h-8 mb-1 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
              <input ref={LifeGoalEl} placeholder={""} type="text" class="w-3/4 h-8 mb-1 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
              <input ref={LifeGoalEl} placeholder={""} type="text" class="w-3/4 h-8 border border-white3 rounded-xl bg-white0 focus-text-black1 outline-0"/>
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