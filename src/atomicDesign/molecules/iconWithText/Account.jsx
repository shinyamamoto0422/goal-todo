import { IconAccount } from "../../atoms/icon/IconAccount.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Account = () => {
  return (
    <div class="flex items-center">
      <IconAccount/>
      <TextSizeXs children="Account"/>
    </div>
  )
}