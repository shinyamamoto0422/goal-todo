import { Routes, Route } from "react-router-dom"

import { HomePage } from "../atomicDesign/pages/HomePage"
import { MylistPage } from "../atomicDesign/pages/MylistPage"
import { GoalPage } from "../atomicDesign/pages/GoalPage"
import { StatsPage } from "../atomicDesign/pages/StatsPage"
import { AccountPage } from "../atomicDesign/pages/AccountPage"
import { Page404 } from "../atomicDesign/pages/Page404"

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/mylist" element={<MylistPage />} />
        <Route path="/goal" element={<GoalPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  )
}