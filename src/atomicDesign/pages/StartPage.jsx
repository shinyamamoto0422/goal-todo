import StartLogo from "../../assets/startLogo.svg"
import { GoogleSignInButton } from "../atoms/button/GoogleSignInButton"
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    getRedirectResult,
    createUserWithEmailAndPassword,
    } from "firebase/auth";
import {auth} from "../../firebase/firebase"
import { useState } from "react";

export const StartPage = () => {
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword ] = useState("");

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth, 
                registerEmail, 
                registerPassword);
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    };

    const login = async () => {};

    const logout = async () => {};

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
            <div>
                <h3>Register User</h3>
                <input 
                    type="text" 
                    placeholder="Email..." 
                    onChange={(event) => {
                        setRegisterEmail(event.target.value);
                    }} />
                <input 
                    type="text" 
                    placeholder="Password..." 
                    onChange={(event) => {
                        setRegisterPassword(event.target.value);
                    }}
                />
                <button onClick={register}>Create User</button>

                <h3>Login</h3>
                <input type="text" placeholder="Email..." />
                <input type="text" placeholder="Password..." />
                <button>Login</button>

                <h4>User Logged In;</h4>
                <button>Sign Out</button>
            </div>
        </>
    )
}