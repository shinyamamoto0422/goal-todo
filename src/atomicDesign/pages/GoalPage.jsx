import { GoalBlock } from '../atoms/block/GoalBlock';
import { TopBar } from '../organisms/TopBar';
import { SideBar } from "../templates/SideBar"

export const GoalPage = () => {
    return (
        <div class="
            flex
            h-screen
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3 
        ">
            {/**サイドバー */}
            <SideBar />

                {/**サイドバー以外 */}
                <div class="h-full w-full">
                    {/**トップバー */}
                    <TopBar title={"Goal"}/>
                    
                    
                    <div class="
                    左右中央揃えはできるけど、上下中央揃えができない
                    h-4/5
                    flex justify-center
                    ">
                        
                    <div class="
                    h-full 
                    w-3/4
                    ">
                    <GoalBlock class="block"/>
                    </div>
                    </div>
                </div>
            </div>

    )
};