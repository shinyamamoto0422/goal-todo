import { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';

export const Start = () => {
  const [isActive, setIsActive] = useState(true);
  // const [condition, setCondition] = useState(step1Condition);
  // console.log(step1Condition);
  // console.log(condition);
  // onClick定義
  return (
    <div>
      <div class="relative w-2/6 ml-16 bg-white1 hover:bg-white2 cursor-pointer border border-white3 p-1 rounded-t-md">
        <div class="flex" onClick={() => {
          setIsActive(!isActive);
        }} >
          <p class="text-purple3 text-xl font-semibold"></p>
          <p class="text-xl font-medium">まずはじめに</p>
              {/* toggle画像 */}
              <div class="absolute right-1">
                {
                  isActive ? 
                  <ChevronRightIcon class="h-6 text-black1" />
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
              <p class="text-black1 text-md font-semibold text-center leading-relaxed">
                ここでは、心理学に基づいた
              </p>
              <p class="text-purple4 text-xl font-semibold">5つのステップ</p>
              <p class="text-black1 text-md font-semibold text-center mb-5 leading-8">
                で目標設定をすることで<br/>より達成しやすくなるようアシストします。
              </p>
            </div>
            <div class="absolute bottom-2 w-full text-center">
              <button 
                class="bg-purple4 hover:bg-purple3 text-white1 font-bold py-2 px-5 rounded-2xl" 
              >
                {/* 注意！！
                ボタンをクリックすると、step1が表示されるようにする。ただ、今はできていない
                */}
                スタートする
              </button>
              <p>まだ機能しません。左を使ってくだいさい！</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
};