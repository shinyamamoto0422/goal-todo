import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, Timestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { HomePage } from "../atomicDesign/pages/HomePage";
import { MylistPage } from "../atomicDesign/pages/MylistPage";
import { GoalPage } from "../atomicDesign/pages/Goal/GoalPage";
import { StatsPage } from "../atomicDesign/pages/StatsPage";
import { AccountPage } from "../atomicDesign/pages/AccountPage";
import { Page404 } from "../atomicDesign/pages/Page404";
import { StartPage } from "../atomicDesign/pages/StartPage";
import { SettingStart } from "../atomicDesign/pages/Goal/SettingStart";

// --------------------------次にしたいこと----------------------------
// ・ ログアウト
// ・ 上の問題点の解決
// ・ todosとuserの情報を紐付けして、ログイン後にtodosの作成者todosの情報を取得する処理
// ----------------------------------------------------------------
const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const collectionRef = collection(db, "users");
  if (user === null) {
    console.log("サインインできていません");
    return (
      <Routes>
        <Route path="/signin" element={< StartPage />} />
        <Route path="*" element={<Navigate to="/signin" />} />
      </Routes>
    )
  } else {
    // ユーザーのドキュメントが存在するか確認
    getDoc(doc(db, "users", user.uid)).then(docSnap => {
      // 存在する場合は新規登録しない
      if (docSnap.exists()) {
        console.log("既にユーザーデータは存在しています");
        console.log("User data:", docSnap.data());
      } else {
        console.log("No such document!");
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
        setDoc(doc(collectionRef, uid), { ...newDoclist });
        console.log("新規ユーザーデータを登録しました");
      }
    })
    console.log("サインインしました")
    return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/goal" element={<GoalPage />} />
            <Route path="/goal/settingstart" element={<SettingStart/> } />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<Page404 />} />
        <Route path="/signin" element={<Navigate to="/home" />} />
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