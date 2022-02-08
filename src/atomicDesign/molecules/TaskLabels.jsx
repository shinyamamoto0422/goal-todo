import { FlagMarkType1 } from "../atoms/flagMark/FlagMarkType1"
import { NameTagWithAt } from "../atoms/nameTag/NameTagWithAt"
import { ChevronRightIcon } from '@heroicons/react/outline'
import { Priority } from "./Priority"

export const TaskLabels = ({ listName, priorityNum, flug }) => {
    return (
        <div class="flex w-56 truncate">
            <NameTagWithAt listName={listName} />
            {/**重要度は変更できるようにしたい */}
            <Priority priorityNum={priorityNum} />
            {/**フラグのTrue, Falseの状態も引数にしたい */}
            <FlagMarkType1 flug={flug} />
            <div class="text-white2">
                <ChevronRightIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
            </div>
            <div class="border border-1 border-white3" />
        </div>
    )
}