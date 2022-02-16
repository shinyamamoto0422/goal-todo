import { Link } from 'react-router-dom';

import { TopBarBorder } from '../../../common/TopBarBorder';
// import { GoalBlock } from './GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

import BookPoint from '../../../assets/Goal/bookPoint.svg';
import Leaf from '../../../assets/Goal/leaf.svg';
import Women from '../../../assets/Goal/woman.svg';
import Note from '../../../assets/Goal/note.svg';

export const SettingList = () => {
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
                        <p class="text-black1 text-base font-semibold">一連の流れ</p>
                        <img src={BookPoint} alt="BookPoint" />
                        <img src={Leaf} alt="Leaf" />
                        <img src={Note} alt="Note" />
                        <img src={Women} alt="Women" />
                        <Link to="/goal/setting-start">
                            <ButtonPurple4 content={"戻る"} />
                        </Link>
                        <Link to="/goal/step1-5">
                            <ButtonPurple4 content={"次へ"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};