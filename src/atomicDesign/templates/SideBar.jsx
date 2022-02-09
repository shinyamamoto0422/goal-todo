import Logo from "../../assets/logo.svg"
import { AccountIconWithText } from "../molecules/iconWithText/AccountIconWithText"
import { GoalIconWithText } from "../molecules/iconWithText/GoalIconWithText"
import { HomeIconWithText } from "../molecules/iconWithText/HomeIconWithText"
import { MylistIconWithText } from "../molecules/iconWithText/MylistIconWithText"
import { StatsIconWithText } from "../molecules/iconWithText/StatsIconWithText"

export const SideBar = () => {
    return (
        <>
            <div class="bg-black1 w-28 h-screen">
                <div class="ml-2 mr-2 h-auto">
                    <img class="w-20 h-24 mt-4" src={Logo} alt="logo" />
                    <HomeIconWithText />
                    <MylistIconWithText />
                    <GoalIconWithText />
                    <StatsIconWithText />
                    <AccountIconWithText />
                </div>
            </div>
            <div class="border border-1 border-white3" />
        </>
    )
}