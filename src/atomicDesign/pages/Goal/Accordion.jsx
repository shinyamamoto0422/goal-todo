import React, { useState, useRef } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';
import GoalSettingFlag from '../../../assets/Goal/GoalSettingFlag.svg';
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4';
import { list } from 'postcss';

import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase/firebase';

export const Accordion = ({ index, title, content, placeholder, radius }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const id = user.uid;
  const goalRef = doc(db, "goals", id);

  const [isActive, setIsActive] = useState(false);
  const [lifeGoal, setLifeGoal] = useState("");

  const LifeGoalEl = useRef("");
  const handleOnclickAddLifeGoal = () => {
    if ( LifeGoalEl.current.value === "") return;
    const newLifeGoal = [...lifeGoal, LifeGoalEl.current.value];
    setLifeGoal(newLifeGoal);
    setDoc(goalRef, { lifeGoal: LifeGoalEl.current.value, uid: id });
    LifeGoalEl.current.value = "";
  };

  return (
    <div class="">
      {/* isActive=trueの時は、background-color・text-colorを変更する */}
      <div className={`relative w-2/6 ml-16 bg-white1 hover:bg-white2 cursor-pointer border border-white3 p-1 ${radius}`}
      >
        <div
          class="flex"
          onClick={
          // isOpenがtrueの時にonClickが発火する
            () => setIsActive(!isActive)}>
          {/* onClickの時と同時に、右側が出る+背景色とテキストカラーを変更+フラグを立てる */}
          {/* <img src={GoalSettingFlag} alt="GoalSettingFlag" /> */}
          <p class="text-purple3 text-xl font-semibold">step</p>
          <p class="text-xl font-medium mr-1">{index}</p>
          <p class="text-black1 text-xl font-medium">{title}</p>
          {/* toggle画像 */}
          <div class="absolute right-1">
            {
              isActive ? 
              <ChevronRightIcon class="h-6" stroke="currentColor" />
              : 
              <ChevronDownIcon class="h-6" stroke="currentColor" />
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
              <p class="text-black1 text-md font-semibold text-center mb-5">{content}</p>
              <input ref={LifeGoalEl} placeholder={placeholder} type="text" class="w-3/4 h-14 border border-white3 rounded-2xl bg-white0 focus-text-black1 outline-0"/>
            </div>
            <div class="absolute bottom-2 w-full text-center">
              <button onClick={handleOnclickAddLifeGoal} content={"決定"} >
                決定
              </button> 
            </div>
          </div>
        </div>
        // 入力が空欄じゃなければ、次に進めるようにする useRefを使う
        // step1を押したときに次のstep2のisOpenがtrueにする
        // onClickにstatus
      }
    </div>
  );
};