import { Link } from "react-router-dom"
import { IconGoal } from "../../atoms/icon/IconGoal.jsx"

export const GoalIconWithText = () => {
  return (
    <Link to="/goal">
      <div class="flex items-center hover:bg-white3 pl-2 pr-2">
        <IconGoal />
        <p class="text-lg text-white2 mt-2 ml-1">Goal</p>
      </div>
    </Link>
  )
}