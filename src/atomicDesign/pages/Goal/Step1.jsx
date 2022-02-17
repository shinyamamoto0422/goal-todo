import { Link } from 'react-router-dom';

import { TopBarBorder } from '../../../common/TopBarBorder';
// import { GoalBlock } from './GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4';

import GoalWomen from '../../../assets/Goal/goalWomen.svg';
import matteringRight from '../../../assets/Goal/matteringRight.svg';

export const Step1 = () => {
    return (
        <div class="
            flex
            h-screen
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            <SideBar />
            <div class="h-full w-full flex-grow-1">
                <div class="h-1/6">
                    <TopBarText title={"Goal"}/>
                    <TopBarBorder/>
                </div>
                <div class="h-5/6 relative">
                    {/* 右側 */}
                    <div class="bg-gray1 rounded-lg w-2/5 h-3/4 top-1/2 left-2/3 absolute -translate-x-1/3 -translate-y-1/2">
                        <p class="text-black1 text-base font-semibold">
                        自分の人生で
                        <br />
                        達成したいゴールはなんですか？
                        </p>
                        <strong>step1</strong>
                        <img src={GoalWomen} alt="GoalWomen" />
                        <img src={matteringRight} alt="matteringRight" />
                    </div>

                    {/* 目標ノート */}
                    <div class="bg-white0 rounded-lg w-2/5 h-3/4 top-1/2 left-1/3 absolute -translate-x-2/3 -translate-y-1/2">
                        <p class="text-3xl">❶{}</p>
                    </div>

                    {/* ボタン */}
                    <section class="absolute bottom-10">
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