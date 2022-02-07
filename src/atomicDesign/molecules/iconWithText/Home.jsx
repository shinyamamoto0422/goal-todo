import { IconHome } from "../../atoms/icon/IconHome.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Home = () => {
  return (
    <div class="flex items-center">
      <IconHome/>
      <TextSizeXs children="Home"/>
    </div>
  )
}