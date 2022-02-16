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
                <div class="">
                    <TopBarText title={"Goal"}/>
                    <TopBarBorder/>
                </div>
                <div class="h-full relative">
                    <div class="bg-gray1 rounded-lg w-3/4 h-3/4 top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2">
                        <img src={CheckCircle} alt="CheckCircle" />
                        <p class="text-black1 text-base font-medium">人のやる気・元気というのはどこから生まれてくると思いますか？</p>
                        <p class="text-black1 text-base font-medium">そもそも、やる気というのは存在せず、取り巻く環境に依存する。</p>
                        <p class="text-black1 text-base font-medium">そんな考え方もあるでしょう。</p>
                        <p class="text-black1 text-xl font-semibold">しかし、</p>
                        <p>「未来設定」つまり自分の理想や夢といったゴールを設定し、<br />それに向かって日々生きている人こそ</p>
                        <p class="text-black1 text-base font-medium">
                            <strong class="text-black1 text-xl font-semibold">生き生き</strong>
                            としていると思っています。
                        </p>
                        <Link to="/goal/">
                            <ButtonPurple4 content={"次へ"} />
                        </Link>
                        <img src={PowerfulWomen} alt="PowerfulWomen" />
                    </div>
                </div>
            </div>
        </div>
    )
};