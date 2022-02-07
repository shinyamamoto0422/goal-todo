import { IconGoal } from "../../atoms/icon/IconGoal.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Goal = () => {
  return (
    <div class="flex items-center">
      <IconGoal/>
      <TextSizeXs children="Goal"/>
    </div>
  )
}