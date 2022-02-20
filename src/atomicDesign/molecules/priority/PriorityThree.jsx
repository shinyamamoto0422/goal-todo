import { PriorityHigh } from "../../atoms/priority/PriorityHigh"
import { PriorityNormal } from "../../atoms/priority/PriorityNormal"
import { PriorityLow } from "../../atoms/priority/PriorityLow"
import { useTodo } from "../../../hooks/useTodo"


export const PriorityThree = ({ setPriorityNum }) => {
  const highButton = () => {
    setPriorityNum(0)
  };
  const normalButton = () => {
    setPriorityNum(1)
  };
  const lowButton = () => {
    setPriorityNum(2)
  };
  return (
    <div>
      <button onClick={lowButton}>
        <PriorityLow />
      </button>
      <button onClick={normalButton}>
        <PriorityNormal />
      </button>
      <button onClick={highButton}>
        <PriorityHigh />
      </button>
    </div>
  )
}