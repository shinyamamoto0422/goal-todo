import { Link } from 'react-router-dom';
import { TopBarBorder } from '../../../common/TopBarBorder';
import { GoalBlock } from '../../atoms/block/GoalBlock';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

export const SettingStart = () => {
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
                    <GoalBlock/>
                    <h1>SettingStartです</h1>
                    {/* private-router みたいに、user-goalsがあれば、navigateでgoal-seeに飛ばす */}
                    {/* ネストしたやり方　ジャケぇさんの動画見る　versionにち注意 */}
                </div>
            </div>
        </div>
    )
};