import { DateText } from "../atoms/dateTime/DateText"
import { TimeText } from "../atoms/dateTime/TimeText"

export const Deadline = ({ deadline }) => {
    return (
        <div class="flex mt-2 ml-2 w-32">
            <div>{deadline}</div>
            {/**<TimeText timeText={timeText} />
            <DateText dateText={dateText} />**/}
        </div>
    )
}