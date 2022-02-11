import { GoalBlock } from '../atoms/block/GoalBlock';
import { SideBar } from "../templates/SideBar"


export const GoalPage = () => {
    return (
        <div class="flex">
            {/**サイドバー */}
            <SideBar class=""/>
            <div class="bg-gradient-to-t from-blue1 via-blue2 to-blue3 h-screen grow flex justify-cneterflex justify-center items-center">
                {/**サイドバー以外 */}
                <GoalBlock class="">
                    <div class="h-full">
                        {/**トップバー */}
                        <div class="">
                            <p class="text-white1 h-12 ml-24 mt-2 w-screen text-3xl">ホーム</p>
                            <div class="border border-1 border-white3" />
                        </div>
                    </div>
                </GoalBlock>
            </div>
        </div>
    )
};