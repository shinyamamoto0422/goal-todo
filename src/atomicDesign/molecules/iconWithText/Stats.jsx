import { Link } from "react-router-dom"
import { IconStats } from "../../atoms/icon/IconStats.jsx"

export const Stats = () => {
  return (
    <Link to="/stats">
      <div class="flex items-center">
        <IconStats />
        <p class="text-lg text-white2 mt-2 ml-1">Stats</p>
      </div>
    </Link>
  )
}