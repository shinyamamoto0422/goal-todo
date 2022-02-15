import { SideBar } from "../templates/SideBar"
import { TopBarText } from "../organisms/TopBarText"
import { TopBarBorder } from "../../common/TopBarBorder"


export const MylistPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                <SideBar/>
                <div class="h-full w-full">
                    <TopBarText title={"Mylist"}/>
                    <TopBarBorder/>
                </div>
            </div>
        </>
    )
}