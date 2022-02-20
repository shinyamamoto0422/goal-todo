import { getAuth } from "firebase/auth";
import { Link } from "react-router-dom";
import { TopBarBorder } from "../../common/TopBarBorder"
import { ButtonPurple4 } from "../atoms/button/ButtonPurple4"
import { TopBarText } from "../organisms/TopBarText"
import { SideBar } from "../templates/SideBar"

export const SettingPage = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    const email = user.email;
    const photoURL = user.photoURL;
    return (
        <>
            <div class="bg-black2 flex h-screen">
                <SideBar />
                <div class="h-full w-full">
                    <TopBarText title={"Setting"} />
                    <TopBarBorder />
                    <div class="flex justify-center text-center">
                        <div class="flex flex-col w-1/3">
                            <p class="h-5" />
                            <div class="flex justify-center">
                                <img class="rounded-full" src={photoURL}  alt="user.photoURL" />
                            </div>
                            <p class="h-5" />
                            <p class="text-white1 text-xl" >
                                {email}
                            </p>
                            <p class="h-10" />
                            <div>
                                <ButtonPurple4 content={"ログアウト"} />
                            </div>
                            <p class="h-5" />
                            <Link to="/setting/privacy_policy">
                                <ButtonPurple4 content={"プライバシーポリシー"} />
                            </Link>
                            <p class="h-5" />
                            <Link to="/setting/terms_of_service">
                                <ButtonPurple4 content={"利用規約"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}