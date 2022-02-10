import StartLogo from "../../assets/startLogo.svg"
import { GoogleSignInButton } from "../atoms/button/GoogleSignInButton"

export const StartPage = () => {
    return (
        <div class="bg-white-1 w-screen h-screen flex justify-center">
            
                <div class="h-screen w-auto flex flex-col">
                    <h1 class="h-1/6" />
                    <img class="" src={StartLogo} alt="startLogo" />
                    <h1 class="h-20" />
                    <GoogleSignInButton/>
                </div>
            
        </div>
    )
}