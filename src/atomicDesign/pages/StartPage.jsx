import StartLogo from "../../assets/startLogo.svg"
import { GoogleSignInButton } from "../atoms/button/GoogleSignInButton"
import { signInWithGoogle } from "../../firebase-hooks/SignInWithGoogle";

export const StartPage = () => {
    return (
        <>
            <div 
                class="bg-white-1 w-screen h-screen flex justify-center"
                onClick={() => signInWithGoogle()}
            >
                <div class="h-screen w-auto flex flex-col">
                    <div class="h-1/6"></div>
                    <img class="" src={StartLogo} alt="startLogo" />
                    <div class="h-20"></div>
                    <GoogleSignInButton/>
                </div>
            </div>
        </>
    )
}