import Logo from "../../assets/logo.svg"
import { Account } from "../molecules/iconWithText/Account"
import { Goal } from "../molecules/iconWithText/Goal"
import { Home } from "../molecules/iconWithText/Home"
import { Mylist } from "../molecules/iconWithText/Mylist"
import { Stats } from "../molecules/iconWithText/Stats"

export const SideBar = () => {
    return (
        <>
            <div class="bg-black1 w-28 h-screen">
                <div class="ml-2 mr-2 h-auto">
                    <img class="w-20 h-24 mt-4" src={Logo} alt="logo" />
                    <Home />
                    <Mylist />
                    <Goal />
                    <Stats />
                    <Account />
                </div>
            </div>
            <div class="border border-1 border-white3" />
        </>
    )
}