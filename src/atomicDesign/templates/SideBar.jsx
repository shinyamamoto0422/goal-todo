import { useState } from "react"
import Logo from "../../assets/logo.svg"
import { AccountIconWithText } from "../molecules/iconWithText/AccountIconWithText"
import { GoalIconWithText } from "../molecules/iconWithText/GoalIconWithText"
import { HomeIconWithText } from "../molecules/iconWithText/HomeIconWithText"
import { MylistIconWithText } from "../molecules/iconWithText/MylistIconWithText"
import { StatsIconWithText } from "../molecules/iconWithText/StatsIconWithText"

// Home.jsx→SideBar.jsx→各IconWithText.jsx
// HomeからSideBar Iconを押した時にスタイルを変更するために、onClickSideBarIconを渡してきている
// 各IconWithTextのpropsにもonClickSideBarIconを渡している
export const SideBar = () => {
    // Sidebar Iconを押したときのスタイル変化
    const [isSideBarIconClicked, setIsSideBarIconClicked] = useState(false);
    const onClickSideBarIcon = () => {
        setIsSideBarIconClicked(!isSideBarIconClicked)
        console.log(isSideBarIconClicked);
    };
    // 注意！！！結局うまく作動しません。




    return (
        <>
            <div class="bg-black1 w-28">
                <div class="">
                    <img class="w-20 h-24 mt-4" src={Logo} alt="logo" />
                    <HomeIconWithText isSideBarIconClicked={isSideBarIconClicked} onClick={onClickSideBarIcon}/>
                    <MylistIconWithText />
                    <GoalIconWithText />
                    <StatsIconWithText />
                    <AccountIconWithText />
                </div>
            </div>
            <div class="border border-white3" />
        </>
    )
}