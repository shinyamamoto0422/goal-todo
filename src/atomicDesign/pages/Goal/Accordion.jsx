import React, { useState } from 'react';
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/outline';

const Accordion = ({ title, content, radius }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div class="">
      {/* isActive=trueの時は、background-color・text-colorを変更する */}
      <div className={`w-2/6 ml-16 bg-white1 hover:bg-white2 cursor-pointer
                      border border-white3 p-1 ${radius}`}
      >
        <div onClick={
          // isOpenがtrueの時にonClickが発火する
            () => setIsActive(!isActive)}>
          <p class="text-black1 text-xl font-semibold">{title}</p>

          {/* toggle画像 */}
          <div>
            {
              isActive ? 
              <ChevronRightIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
              : 
              <ChevronDownIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
            }
          </div>
        </div>
      </div>
      {isActive && 
        <div class="absolute ml-16 left-1/3 top-14 mt-1 w-3/6 
                    bg-white1 border border-white3 p-1"
        >
          <p class="text-black1 text-xl font-medium">{content}</p>
        </div>
        // 入力が空欄じゃなければ、次に進めるようにする useRefを使う
        // step1を押したときに次のstep2のisOpenがtrueにする
        // onClickにstatus
      }
    </div>
  );
};

export default Accordion;

// {goalList.map((list, index) => {
//     return (
//         <div>
//             <div
//             key={index}
//             className={`bg-white1 border border-white3 p-1 ${list.radius}`}
//             >
//                 {/* フラグは、「はじめに」は最初から立ってるけど、step1以降からはonClickが走ったときに立つようにする */}
//                 <p
//                 onClick={() => {
//                     setIsActive(!isActive);
//                     console.log(list.title);
//                 }}
//                 class="text-black1 text-xl font-semibold">
//                     {list.title}
//                     <span>
//                         {isActive ?  '▲' : '▼'}
//                     </span>
//                 </p>
//             </div>
//             {/* 右側 */}
//             {isActive ? (
//                 <div className="bg-white1 border border-white3 p-1">
//                     <p>{list.content}</p>
//                 </div>
//             ) : (
//                 <div></div>
//             )}
//         </div>
//     )
// }
// )}