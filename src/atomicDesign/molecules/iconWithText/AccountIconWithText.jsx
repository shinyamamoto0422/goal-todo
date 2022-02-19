import { Link } from "react-router-dom"
import { IconSetting } from "../../atoms/icon/IconSetting.jsx"

export const AccountIconWithText = () => {
  return (
    <Link to="/setting">
      <div class="flex items-center">
        <IconSetting />
        <p class="text-lg text-white2 mt-2 ml-1">Setting</p>
      </div>
    </Link>
  )
}