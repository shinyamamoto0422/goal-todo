import { TopBarBorder } from "../../common/TopBarBorder"
import { TopBarText } from "../organisms/TopBarText"
import { SideBar } from "../templates/SideBar"


export const AccountPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                <SideBar />
                <div class="h-full w-full">
                    <TopBarText title={"Account"}/>
                    <TopBarBorder/>
                </div>
            </div>
        </>
    )
}