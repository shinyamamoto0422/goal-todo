import { PriorityHigh } from "../../atoms/priority/PriorityHigh"
import { PriorityNormal } from "../../atoms/priority/PriorityNormal"
import { PriorityLow } from "../../atoms/priority/PriorityLow"
import { useTodo } from "../../../hooks/useTodo"


export const PriorityThree = ({ setPriorityNum }) => {
  const highButton = () => {
    setPriorityNum(0)
    console.log("High!")
  };
  const normalButton = () => {
    setPriorityNum(1)
    console.log("Normal!")
  };
  const lowButton = () => {
    setPriorityNum(2)
    console.log("Low!")
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