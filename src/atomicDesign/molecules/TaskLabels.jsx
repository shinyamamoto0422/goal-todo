import { FlagMarkType1 } from "../atoms/flagMark/FlagMarkType1"
import { NameTagWithAt } from "../atoms/nameTag/NameTagWithAt"
import { ChevronRightIcon } from '@heroicons/react/outline'
import { Priority } from "./Priority"

export const TaskLabels = ({ todo, toggleFlag }) => {
    return (
        <div class="flex w-56 truncate">
            <NameTagWithAt listName={todo.listName} />
            <Priority priorityNum={todo.priorityNum} />
            {/**フラグのTrue, Falseの状態も引数にしたい */}
            <FlagMarkType1 todo={todo} toggleFlag={toggleFlag} />
            <div class="text-white2">
                <ChevronRightIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
            </div>
            <div class="border border-1 border-white3" />
        </div>
    )
}