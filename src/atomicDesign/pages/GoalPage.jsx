import { TopBarBorder } from '../../common/TopBarBorder';
import { GoalBlock } from '../atoms/block/GoalBlock';
import { TopBarText } from '../organisms/TopBarText';
import { SideBar } from "../templates/SideBar"

export const GoalPage = () => {
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
                </div>
            </div>
        </div>
    )
};