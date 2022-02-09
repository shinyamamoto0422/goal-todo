import { TaskName } from "../atoms/TaskName"
import { Deadline } from "../molecules/Deadline"
import { TaskLabels } from "../molecules/TaskLabels"
import { CheckCircleIcon } from "@heroicons/react/outline"

export const OneTask = ({ taskName, listName, priorityNum, flag, deadline, complete }) => {
    //console.log({ taskName, listName, priorityNum, flug, timeText, dateText })
    return (
        <>
            <div class="flex">
                <div class="text-white2 h-6 w-8 ml-12">
                    {/**完了・未完了に合わせて変更する可能性あり (complete) */}
                    <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
                </div>
                <TaskName>{taskName}</TaskName>
                <div class="flex h-10">
                    <div class="flex">
                        <TaskLabels listName={listName} priorityNum={priorityNum} flag={flag} />
                        <Deadline deadline={deadline} />
                    </div>
                </div>
            </div>
            <div class="border border-1 border-white3 ml-24" />
        </>
    )
}