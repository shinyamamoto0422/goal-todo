import StartLogo from "../../assets/startLogo.svg"
import { GoogleSignInButton } from "../atoms/button/GoogleSignInButton"

import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, getRedirectResult } from "firebase/auth";


export const StartPage = () => {
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider()

        const auth = getAuth();

        /*        onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/firebase.User
                        const uid = user.uid;
                        // ...
                    } else {
                        // User is signed out
                        // ...
                    }
                });
        */

        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });


        /*        getRedirectResult(auth)
                    .then((result) => {
                        // This gives you a Google Access Token. You can use it to access Google APIs.
                        const credential = GoogleAuthProvider.credentialFromResult(result);
                        const token = credential.accessToken;
        
                        // The signed-in user info.
                        const user = result.user;
                    }).catch((error) => {
                        // Handle Errors here.
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        // The email of the user's account used.
                        const email = error.email;
                        // The AuthCredential type that was used.
                        const credential = GoogleAuthProvider.credentialFromError(error);
                        // ...
                    });
        */


    }

    return (
        <div class="bg-white-1 w-screen h-screen flex justify-center">

            <div
                onClick={() => signInWithGoogle()}
                class="h-screen w-auto flex flex-col"
            >
                <h1 class="h-1/6" />
                <img class="" src={StartLogo} alt="startLogo" />
                <h1 class="h-20" />
                <GoogleSignInButton />
            </div>

        </div>
    )
}