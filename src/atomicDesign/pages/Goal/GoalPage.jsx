import { Link } from 'react-router-dom';
import { TopBarBorder } from '../../../common/TopBarBorder';
import { TopBarText } from '../../organisms/TopBarText';
import { SideBar } from "../../templates/SideBar"
import { ButtonPurple4 } from '../../atoms/button/ButtonPurple4'; 

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
                        <Link to="/goal/start">
                                <ButtonPurple4 content={"目標設定をする"} />
                        </Link>
                    <TopBarBorder/>
                </div>
                <div class="
                    h-full relative
                    text-center
                ">
                    <div class="bg-gray1 rounded-lg w-3/4 h-3/4 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                    </div>
                </div>
            </div>
        </div>
    )
};