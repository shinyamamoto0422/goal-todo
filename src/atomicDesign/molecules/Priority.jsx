import { PriorityHigh } from "../atoms/priority/PriorityHigh"
import { PriorityLow } from "../atoms/priority/PriorityLow"
import { PriorityNormal } from "../atoms/priority/PriorityNormal"

export const Priority = ({ priorityNum }) => {
    if (priorityNum == "0") {
        return (
            <PriorityHigh />
        )
    } else if (priorityNum == "2") {
        return (
            <PriorityLow />
        )
    } else {
        return <PriorityNormal />
    }
}