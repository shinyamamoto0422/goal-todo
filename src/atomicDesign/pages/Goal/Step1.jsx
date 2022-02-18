import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';

import { TopBarBorder } from '../../../common/TopBarBorder';
// import { GoalBlock } from './GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4';

import GoalWomen from '../../../assets/Goal/goalWomen.svg';
import matteringRight from '../../../assets/Goal/matteringRight.svg';

import { doc, setDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { db } from '../../../firebase/firebase';

export const Step1 = () => {
    // 追加を押したときにfirestoreに追加する
    const auth = getAuth();
    const user = auth.currentUser;
    const id = user.uid;
    const goalRef = doc(db, "goals", id);

    // 追加を押したときに左のボックスに追加する
    const [lifeGoal, setLifeGoal] = useState("");
    const LifeGoalEl = useRef("");
    const handleOnclickAddLifeGoal = () => {
        if ( LifeGoalEl.current.value === "") return;
        setLifeGoal(LifeGoalEl.current.value);
        setDoc(goalRef, { lifeGoal: LifeGoalEl.current.value, uid: id });
        LifeGoalEl.current.value = "";
    };
    return (
        <div class="
            flex
            h-screen
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            <SideBar />
            <div class="h-full w-full">
                <div class="">
                    <TopBarText title={"Goal"}/>
                    <TopBarBorder/>
                </div>
                <div class="h-5/6 relative">
                    {/* 右側 */}
                    <div class="bg-gray1 rounded-lg w-2/5 h-5/6 top-1/2 left-2/3 absolute -translate-x-1/3 -translate-y-1/2">
                        <p class="text-black1 text-base font-semibold">
                        自分の人生で
                        <br />
                        達成したいゴールはなんですか？
                        </p>
                        <textarea 
                            ref={LifeGoalEl}
                            cols="30" 
                            rows="1" 
                            class="text-white2 text-size-sm text-center w-36 mx-2 bg-black3 border border-black1 rounded-xl"
                        ></textarea>
                        <button onClick={handleOnclickAddLifeGoal}>追加</button>
                        <img src={GoalWomen} alt="GoalWomen" />
                        <img src={matteringRight} alt="matteringRight" />
                    </div>

                    {/* 目標ノート */}
                    <div class="bg-white0 rounded-lg w-2/5 h-5/6 top-1/2 left-1/3 absolute -translate-x-2/3 -translate-y-1/2">
                        <p class="text-3xl">❶{lifeGoal}</p>
                    </div>

                    {/* ボタン */}
                    <section class="w-full">
                        <Link to="/goal/setting-list">
                            <ButtonPurple4 content={"戻る"} />
                        </Link>
                        <Link to="/goal/step2-5">
                            <ButtonPurple4 content={"次へ"} />
                        </Link>
                    </section>
                </div>
            </div>
        </div>
        
    )
};