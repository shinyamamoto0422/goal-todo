import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { setDoc, collection, Timestamp, doc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { HomePage } from "../atomicDesign/pages/HomePage";
import { MylistPage } from "../atomicDesign/pages/MylistPage";
import { GoalPage } from "../atomicDesign/pages/GoalPage";
import { StatsPage } from "../atomicDesign/pages/StatsPage";
import { AccountPage } from "../atomicDesign/pages/AccountPage";
import { Page404 } from "../atomicDesign/pages/Page404";
import { StartPage } from "../atomicDesign/pages/StartPage";

// --------------------------現在の問題点----------------------------
// 毎回処理が走るたびに、setDocでcollectionにユーザーの情報を追加する処理が走る
// だが、これはいらない動作なので、ユーザー情報を追加する処理は一回だけ行うようにしたい(無駄な処理を減らすため)
// ----------------------------------------------------------------
// --------------------------次にしたいこと----------------------------
// ・ ログイン成功後に、homeに飛ぶようにする（リダイレクトを行う）
// ・ ログアウト
// ・ 上の問題点の解決
// ・ todosとuserの情報を紐付けして、ログイン後にtodosの作成者todosの情報を取得する処理
// ----------------------------------------------------------------
const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const collectionRef = collection(db ,"users");
  if (user !== null) {
    // collectionに渡したい値を設定
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const uid = user.uid

    const newDoclist = {
      displayName: displayName,
      email: email,
      photoURL: photoURL,
      uid: uid,
      createdAt: Timestamp.now()
    };
    // collectionRefにnewDoclist(自動IDはuidに設定)を追加
    setDoc(doc(collectionRef, uid), {...newDoclist});
    console.log("サインインしました")
    return (
      <Routes>
        <Route path="/signin" element={<StartPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    )
  } else {
    console.log("サインインできていません");
    return (
      <Routes>
        <Route path="/signin" element={< StartPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    )
  }
}

export default function App() {
  // ログインの保持
  const [signinUser, setSigninUser] = useState([]);
  const auth = getAuth()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSigninUser(user)
      }
    })
  }, [signinUser])

  return (
    <div className="App" >
      <PrivateRoute />
    </div >
  )
}