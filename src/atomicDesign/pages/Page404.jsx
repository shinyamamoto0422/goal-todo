import { Link } from "react-router-dom"
import { TopBar } from "../organisms/TopBar"
import { SideBar } from "../templates/SideBar"

export const Page404 = () => {
    return (
        <>
            <div class="bg-black2 flex">
                {/**サイドバー */}
                <SideBar />
                {/**サイドバー以外 */}
                <div class="h-full">
                    {/**トップバー */}
                    <TopBar title={"404"} />
                    <div class="text-purple1 text-4xl bg-black1 h-screen w-screen">
                        <h1>404 not found</h1>
                        <Link to="/signin">サインインページへ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}