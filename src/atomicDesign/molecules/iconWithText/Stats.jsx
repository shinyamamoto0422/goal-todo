import { IconStats } from "../../atoms/icon/IconStats.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Stats = () => {
  return (
    <div class="flex items-center">
      <IconStats/>
      <TextSizeXs children="Stats"/>
    </div>
  )
}