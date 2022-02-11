import { Routes, Route } from "react-router-dom"
import { initializeApp } from "firebase/app"

import { HomePage } from "../atomicDesign/pages/HomePage"
import { MylistPage } from "../atomicDesign/pages/MylistPage"
import { GoalPage } from "../atomicDesign/pages/GoalPage"
import { StatsPage } from "../atomicDesign/pages/StatsPage"
import { AccountPage } from "../atomicDesign/pages/AccountPage"
import { Page404 } from "../atomicDesign/pages/Page404"
import { StartPage } from "../atomicDesign/pages/StartPage"

const firebaseConfig = {
  apiKey: "process.env.REACT_APP_FIREBASE_API_KEY",
  authDomain: "process.env.REACT_APP_FIREBASE_AUTH_DOMAIN",
  projectId: "process.env.REACT_APP_FIREBASE_DATABASE_URL",
  storageBucket: "process.env.REACT_APP_FIREBASE_PROJECT_ID",
  messagingSenderId: "process.env.REACT_APP_FIREBASE_STORAGE_BUCKET",
  appId: "process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID",
  measurementId: "process.env.REACT_APP_FIREBASE_APP_ID"
}
initializeApp(firebaseConfig);

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/account" element={<AccountPage />} />

        <Route path="/signin" element={<StartPage />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}