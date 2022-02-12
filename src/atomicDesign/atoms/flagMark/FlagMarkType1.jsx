import { BookmarkIcon } from '@heroicons/react/outline';

export const FlagMarkType1 = ({ todo, toggleFlag }) => {
    const handleFlag = () => toggleFlag(todo.id, todo.flag);
    if (todo.flag) {
        return (
            <div class="text-purple2">
                <button onClick={handleFlag}>
                    <BookmarkIcon class="h-8 w-7" fill='currentcolor' stroke='currentcolor' />
                </button>
            </div>
        )
    } else {
        return (
            <div class="text-white2">
                <button onClick={handleFlag}>
                    <BookmarkIcon class="h-8 w-7" fill='none' stroke='currentcolor' />
                </button>
            </div>
        )
    }
}