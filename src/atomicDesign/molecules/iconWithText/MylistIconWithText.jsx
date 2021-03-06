import { Link } from "react-router-dom"
import { IconMylist } from "../../atoms/icon/IconMylist.jsx"

export const MylistIconWithText = () => {
  return (
    <Link to="/mylist">
      <div class="flex items-center hover:bg-white3 pl-2 pr-2">
        <IconMylist />
        <p class="text-lg text-white2 mt-2 ml-1">Mylist</p>
      </div>
    </Link>
  )
}