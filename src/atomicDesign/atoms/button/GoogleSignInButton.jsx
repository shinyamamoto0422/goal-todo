import GoogleLogo from "../../../assets/googleLogo.svg"
import firebase from 'firebase/compat/app';
import "firebase/auth";

export const GoogleSignInButton = () => {
  const signInWithGoogle = () => {
    // Googleプロバイダオブジェクトのインスタンスを作成
    const provider = new firebase.auth.GoogleAuthProvider()
    // ポップアップウィンドウでログインを行う場合はsignInWithPopupを呼び出す
    firebase.auth().signInWithPopup(provider)
    .then(user => {
        alert("success : " + user.user.displayName + "さんでログインしました");
        // homeに遷移する処理をかく
      })
      // userのidを取得
      .catch(error => {
          alert(error.message);
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