import { Routes, Route, Navigate } from "react-router-dom"
import { getAuth } from "firebase/auth"

import { HomePage } from "../atomicDesign/pages/HomePage"
import { MylistPage } from "../atomicDesign/pages/MylistPage"
import { GoalPage } from "../atomicDesign/pages/GoalPage"
import { StatsPage } from "../atomicDesign/pages/StatsPage"
import { AccountPage } from "../atomicDesign/pages/AccountPage"
import { Page404 } from "../atomicDesign/pages/Page404"
import { StartPage } from "../atomicDesign/pages/StartPage"

const PrivateRoute = () => {
  // 認証状態
  const auth = getAuth()
  const user = auth.currentUser
  if (!user) {
    console.log("サインインしてください！！")
    console.log(user)
    return (
      <Routes>
        <Route path="/signin" element={< StartPage />} />
      </Routes>
    )
  } else {
    const uid = user.uid
    console.log("現在サインイン状態")
    console.log("user=" + user)
    console.log("uid=" + uid)
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
  }
}

export default function App() {
  return (
    < div className="App" >
      <PrivateRoute />
    </div >
  )
}