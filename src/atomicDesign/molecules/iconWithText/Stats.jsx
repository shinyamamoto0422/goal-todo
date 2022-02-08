import { IconStats } from "../../atoms/icon/IconStats.jsx"
import { TextSizeXs } from "../../atoms/text/TextSizeXs.jsx"

export const Stats = () => {
  return (
    <div class="flex items-center">
      <IconStats />
      <p class="text-lg text-white2 mt-2 ml-1">Stats</p>
    </div>
  )
}