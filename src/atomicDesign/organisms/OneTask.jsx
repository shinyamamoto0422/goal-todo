import { TaskName } from "../atoms/TaskName"
import { Deadline } from "../molecules/Deadline"
import { TaskLabels } from "../molecules/TaskLabels"
import { CompleteMark } from "../molecules/CompleteMark"

export const OneTask = ({ todo, toggleComplete, toggleFlag }) => {
    // 変数はid, taskName, listName, priorityNum, flag, deadline, complete
    //console.log({ taskName, listName, priorityNum, flug, timeText, dateText })
    return (
        <>
            <div class="flex">
                <CompleteMark todo={todo} toggleComplete={toggleComplete} />
                <TaskName>{todo.taskName}</TaskName>
                <div class="flex h-10">
                    <div class="flex">
                        <TaskLabels todo={todo} toggleFlag={toggleFlag} />
                        <Deadline deadline={todo.deadline} />
                    </div>
                </div>
            </div>
            <div class="border border-1 border-white3 ml-24" />
        </>
    )
}