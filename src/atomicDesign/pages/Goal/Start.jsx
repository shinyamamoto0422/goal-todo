import { Link } from 'react-router-dom';
import { TopBarBorder } from '../../../common/TopBarBorder';
// import { GoalBlock } from './GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

import PowerfulWomen from '../../../assets/Goal/powerfulwomen.svg';
import CheckCircle from '../../../assets/Goal/check-circle.svg';

export const Start = () => {
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
                    <div class="bg-gray1 rounded-lg w-3/4 h-5/6 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                        <p class="text-black1 text-base font-semibold">目標設定をし、それを日々こなすことでより夢に近づくお手伝いをします。</p>
                        <Link to="/goal/">
                            <ButtonPurple4 content={"戻る"} />
                        </Link>
                        <Link to="/goal/explain">
                            <ButtonPurple4 content={"次へ"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};