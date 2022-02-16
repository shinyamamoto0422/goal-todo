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
                    <TopBarBorder/>
                </div>
                <div class="h-full relative
                            text-center
                ">
                    <div class="bg-gray1 rounded-lg w-3/4 h-3/4 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                        <p class="text-black1 text-xl font-semibold">
                            目標設定をし、それを日々こなすことでより夢に近づくお手伝いをします。
                        </p>
                        <Link to="/goal/start">
                            <ButtonPurple4 content={"目標設定"} />
                        </Link>
                        <br />
                        <Link to="/goal/explain">
                            <ButtonPurple4 content={"説明"} />
                        </Link>
                        <br />
                        <Link to="/goal/setting-start">
                            <ButtonPurple4 content={"目標設定スタート"} />
                        </Link>
                        <br />
                        <Link to="/goal/setting-list">
                            <ButtonPurple4 content={"一連の流れ"} />
                        </Link>
                        <br />
                        <Link to="/goal/step1-5">
                            <ButtonPurple4 content={"1-達成したい目標を掲げる"} />
                        </Link>
                        <br />
                        <Link to="/goal/step2-5">
                            <ButtonPurple4 content={"2-達成した時の感情をあげる"} />
                        </Link>
                        <br />
                        <Link to="/goal/step3-5">
                            <ButtonPurple4 content={"3-目標を細かく分割する"} />
                        </Link>
                        <br />
                        <Link to="/goal/step4-5">
                            <ButtonPurple4 content={"4-数値化して現実的に落とし込む"} />
                        </Link>
                        <br />
                        <Link to="/goal/step5-5">
                            <ButtonPurple4 content={"5-目標に近づくためのルーティン"} />
                        </Link>
                        <br />
                        <Link to="/goal/well-done">
                            <ButtonPurple4 content={"頑張りましたね！"} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
};