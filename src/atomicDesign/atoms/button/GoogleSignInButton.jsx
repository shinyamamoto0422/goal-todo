import GoogleLogo from "../../../assets/googleLogo.svg"
import { getAuth, signInWithPopup, GoogleAuthProvider, linkWithPopup } from "firebase/auth";
import "firebase/auth";

export const GoogleSignInButton = () => {
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    //signInWithPopup(auth)
    linkWithPopup(auth.currentUser, provider)
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
  }
  return (
    <button class="bg-white-200 hover:bg-gray-100 border border-gray-400 py-2 rounded-2xl flex flex-row"
      onClick={() => signInWithGoogle()}>
      <img class="w-8 pl-3 pt-0.5" src={GoogleLogo} alt="googleLogo" />
      <div class="pl-6 text-gray-600 font-bold">Continue with Google</div>
    </button>
  )
}