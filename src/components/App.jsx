import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, Timestamp, doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

import { HomePage } from "../atomicDesign/pages/HomePage";
import { MylistPage } from "../atomicDesign/pages/MylistPage";
import { GoalPage } from "../atomicDesign/pages/GoalPage";
import { StatsPage } from "../atomicDesign/pages/StatsPage";
import { AccountPage } from "../atomicDesign/pages/AccountPage";
import { Page404 } from "../atomicDesign/pages/Page404";
import { StartPage } from "../atomicDesign/pages/StartPage";

// --------------------------次にしたいこと----------------------------
// ・ ログアウト
// ・ 上の問題点の解決
// ・ todosとuserの情報を紐付けして、ログイン後にtodosの作成者todosの情報を取得する処理
// ----------------------------------------------------------------
const PrivateRoute = () => {
  const auth = getAuth();
  const user = auth.currentUser;
  const collectionRef = collection(db, "users");
  const todosRef = collection(db, "todos");
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
    // ユーザーのtodosが存在するか確認
    getDoc(doc(db, "todos", user.uid)).then(docSnap => {
      // 存在する場合は新規登録しない
      if (docSnap.exists()) {
        console.log("既にユーザーのtodosは存在しています");
        console.log("todos data:", docSnap.data());
      } else {
        console.log("No such document!");
        // collectionに渡したい値を設定
        const todosUserName = user.displayName;
        const uid = user.uid
        const newDoclist = {
          todosUserName: todosUserName,
          uid: uid,
          createdAt: Timestamp.now()
        };
        // todosRefにnewDoclist(自動IDはuidに設定)を追加
        setDoc(doc(todosRef, uid), { ...newDoclist });
        const id = uuidv4()
        const firstTask = {
          complete: false,
          deadline: "2100",
          flag: false,
          id: id,
          listName: "",
          priorityNum: 2,
          taskName: "welcome!!",
          todoMemo: "this is first task",
          createdAt: Timestamp.now(),
          updatedAt: "",
          deletedAt: "",
          uid: uid,
        };
        // ファーストタスク作成。同時にusertodos(全てのtodo)を作成。
        setDoc(doc(todosRef, uid, "usertodos", id), firstTask);
        console.log("新規ユーザーtodosを登録しました");
      }
    })
    console.log("サインインしました")
    return (
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/goal" element={<GoalPage />} />
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