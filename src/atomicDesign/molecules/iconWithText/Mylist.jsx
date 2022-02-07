import { IconMylist } from "../../atoms/icon/IconMylist.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Mylist = () => {
  return (
    <div class="flex items-center">
      <IconMylist/>
      <TextSizeXs children="Mylist"/>
    </div>
  )
}