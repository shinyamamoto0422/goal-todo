export const Deadline = ({ deadline }) => {
    return (
        <div class="flex mt-2 ml-2 w-32 text-purple4 text-size-sm">
            <div>{deadline}</div>
            {/**<TimeText timeText={timeText} />
            <DateText dateText={dateText} />**/}
        </div>
    )
}