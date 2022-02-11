import StartLogo from "../../assets/startLogo.svg"
import { GoogleSignInButton } from "../atoms/button/GoogleSignInButton"
import firebase from "firebase/compat/app"

const firebaseConfig = {
    apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
    authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
    projectId: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
    storageBucket: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
    messagingSenderId: "process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID",
    appId: "process.env.REACT_APP_FIREBASE_APP_ID",
    measurementId: "process.env.REACT_APP_FIREBASE_MEASUREMEN_ID"
  }
  firebase.initializeApp(firebaseConfig);

export const StartPage = () => {
    return (
        <div class="bg-white-1 w-screen h-screen flex justify-center">

            <div class="h-screen w-auto flex flex-col">
                <h1 class="h-1/6" />
                <img class="" src={StartLogo} alt="startLogo" />
                <h1 class="h-20" />
                <GoogleSignInButton />
            </div>

        </div>
    )
}