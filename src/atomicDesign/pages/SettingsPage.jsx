import { getAuth } from "firebase/auth";
import { collection } from "firebase/firestore";
import { Link } from "react-router-dom";
import { TopBarBorder } from "../../common/TopBarBorder"
import { db } from "../../firebase/firebase";
import { ButtonPurple4 } from "../atoms/button/ButtonPurple4"
import { TopBarText } from "../organisms/TopBarText"
import { SideBar } from "../templates/SideBar"

const auth = getAuth();
const user = auth.currentUser;
const collectionRef = collection(db, "users");
const email = user.email;
const photoURL = user.photoURL;
export const SettingsPage = () => {
    return (
        <>
            <div class="
            bg-gradient-to-t 
            from-blue1 via-blue2 to-blue3
            flex h-screen
            ">
                <SideBar />
                <div class="h-full w-full">
                    <TopBarText title={"Settings"} />
                    <TopBarBorder />
                    <div class="flex justify-center">
                        <div class="flex flex-col w-1/3">
                            <p class="h-10" />
                            <div class="text-white1 flex justify-center text-2xl">
                                ログイン中のアカウント
                            </div>
                            <p class="h-5" />
                            <div class="flex justify-center">
                                <img src={photoURL} alt="user.photoURL" />
                            </div>
                            <p class="h-5" />
                            <div class="text-white1 flex justify-center text-xl" >
                                {email}
                            </div>
                            <p class="h-10" />
                            <ButtonPurple4 content={"ログアウト"} />
                            <p class="h-5" />
                            <Link to="/home/focus">
                            <ButtonPurple4 content={"プライバシーポリシー"} />
                            </Link>
                            <p class="h-5" />
                            <Link to="/home/focus">
                            <ButtonPurple4 content={"利用規約"} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}