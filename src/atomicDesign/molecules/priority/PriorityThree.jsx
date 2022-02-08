import { PriorityHigh } from "../../atoms/priority/PriorityHigh"
import { PriorityNormal} from "../../atoms/priority/PriorityNormal"
import { PriorityLow } from "../../atoms/priority/PriorityLow"


export const PriorityThree = () => {
  return (
    <div>
      <PriorityHigh />
      <PriorityNormal />
      <PriorityLow />
    </div>
  )
}