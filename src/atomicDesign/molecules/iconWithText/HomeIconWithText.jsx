import { Link } from "react-router-dom"
import { IconHome } from "../../atoms/icon/IconHome.jsx"


export const HomeIconWithText = ({isSideBarIconClicked, onClick}) => {
  if (isSideBarIconClicked === false) {
    return (
      <Link to="/home">
        <div class={`flex text-center hover:bg-white3 pl-2 pr-2`} onClick={onClick}>
          <IconHome />
          <p class={`text-lg text-white2 mt-1 ml-1`}>Home</p>
        </div>
      </Link>
    )
  } else {
    return (
      <Link to="/home">
        <div class={`flex text-center bg-white3 pl-2 pr-2`} onClick={onClick}>
          <IconHome />
          <p class={`text-lg text-purple4 mt-1 ml-1`}>Home</p>
        </div>
      </Link>
    )
  }
}