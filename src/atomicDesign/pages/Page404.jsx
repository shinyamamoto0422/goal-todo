import { TopBarBorder } from "../../common/TopBarBorder"
import { TopBarText } from "../organisms/TopBarText"
import { Link } from "react-router-dom"
import { SideBar } from "../templates/SideBar"

export const Page404 = () => {
    return (
        <>
            <div class="bg-black2 flex">
                <SideBar />
                <div class="h-full">
                    <TopBarText title={"404"}/>
                    <TopBarBorder/>
                    <div class="text-purple1 text-4xl bg-black1 h-screen w-screen">
                        <h1>404 not found</h1>
                        <Link to="/signin">サインインページへ</Link>
                    </div>
                </div>
            </div>
        </>
    )
}