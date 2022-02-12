import { GoalBlock } from '../atoms/block/GoalBlock';
import { TopBar } from '../organisms/TopBar';
import { SideBar } from "../templates/SideBar"

export const GoalPage = () => {
    return (
        <div class="
            flex
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            {/**サイドバー */}
            <SideBar />
            <div class="
                h-screen
                grow flex justify-cneter flex justify-center items-center
            ">
                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <TopBar title={"Goal"}/>
                    <div>
                        <GoalBlock class="block"/>
                    </div>
                </div>
            </div>
        </div>
    )
};