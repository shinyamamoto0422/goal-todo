import { Link } from "react-router-dom"
import { IconHome } from "../../atoms/icon/IconHome.jsx"

export const Home = () => {
  return (
    <Link to="/home">
      <div class="flex">
        <IconHome />
        <p class="text-lg text-white2 mt-2 ml-1">Home</p>
      </div>
    </Link>
  )
}