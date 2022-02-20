import { Link } from "react-router-dom"
import { IconStats } from "../../atoms/icon/IconStats.jsx"

export const StatsIconWithText = () => {
  return (
    <Link to="/stats">
      <div class="flex items-center hover:bg-white3 pl-2 pr-2">
        <IconStats />
        <p class="text-lg text-white2 mt-2 ml-1">Stats</p>
      </div>
    </Link>
  )
}