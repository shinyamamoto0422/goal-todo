import { SideBar } from "../templates/SideBar"
import { TopBar } from "../organisms/TopBar"


export const MylistPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar/>
                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <TopBar title={"Mylist"}/>
                    <p class="text-9xl text-white1">Mylist</p>
                </div>
            </div>
        </>
    )
}