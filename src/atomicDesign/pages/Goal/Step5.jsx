import { Link } from 'react-router-dom';

import { TopBarBorder } from '../../../common/TopBarBorder';
// import { GoalBlock } from './GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4';

import MatteringRight from '../../../assets/Goal/matteringRight.svg';

export const Step5 = () => {
    return (
        <div class="
            flex
            h-screen
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            <SideBar />
            <div class="h-full w-full flex-grow-1">
                <div class="">
                    <TopBarText title={"Goal"}/>
                    <TopBarBorder/>
                </div>
                <div class="h-full relative">
                    <div class="bg-gray1 rounded-lg w-3/4 h-3/4 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                        <p class="text-black1 text-base font-semibold">
                          最後に目標に近づくために、習慣化すること（ルーティング行動）を3つあげましょう。
                        </p>
                        <img src={MatteringRight} alt="MatteringRight" />
                        <Link to="/goal/step4-5">
                            <ButtonPurple4 content={"戻る"} />
                        </Link>
                        <Link to="/goal/well-done">
                            <ButtonPurple4 content={"次へ"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};