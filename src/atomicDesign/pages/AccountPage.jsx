import { TopBar } from "../organisms/TopBar"
import { SideBar } from "../templates/SideBar"


export const AccountPage = () => {
    return (
        <>
            <div class="bg-black2 flex h-screen">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <TopBar title={"Account"}/>
                    <p class="text-9xl text-white1">Account</p>
                </div>
            </div>
        </>
    )
}