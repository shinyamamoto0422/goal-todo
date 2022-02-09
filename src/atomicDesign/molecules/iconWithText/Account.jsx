import { Link } from "react-router-dom"
import { IconAccount } from "../../atoms/icon/IconAccount.jsx"

export const Account = () => {
  return (
    <Link to="/account">
      <div class="flex items-center">
        <IconAccount />
        <p class="text-lg text-white2 mt-2 ml-1">Account</p>
      </div>
    </Link>
  )
}