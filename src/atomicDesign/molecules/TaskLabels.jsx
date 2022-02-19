import { FlagMarkType1 } from "../atoms/flagMark/FlagMarkType1"
import { NameTagWithAt } from "../atoms/nameTag/NameTagWithAt"
import { ChevronRightIcon } from '@heroicons/react/outline'
import { Priority } from "./Priority"
import { TodoEditButton } from "../atoms/button/TodoEditButton"

export const TaskLabels = ({ todo, toggleFlag, setEditModeFlag, setEditTargetTodo }) => {
    return (
        <div class="flex w-56 truncate">
            <NameTagWithAt listName={todo.listName} />
            <Priority priorityNum={todo.priorityNum} />
            {/**フラグのTrue, Falseの状態も引数にしたい */}
            <FlagMarkType1 todo={todo} toggleFlag={toggleFlag} />
            <TodoEditButton todo={todo} setEditModeFlag={setEditModeFlag} setEditTargetTodo={setEditTargetTodo} />
            <div class="border border-1 border-white3" />
        </div>
    )
}