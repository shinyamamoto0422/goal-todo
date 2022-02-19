import { ChevronRightIcon } from "@heroicons/react/outline"

export const TodoEditButton = ({ todo, setEditModeFlag, setEditTargetTodo }) => {
    const openEditMenu = () => {
        //console.log(todo)
        setEditModeFlag(true);
        setEditTargetTodo(todo);
    }
    return (
        <div class="text-white2">
            <button onClick={openEditMenu}>
                <ChevronRightIcon class="h-6 mt-2 ml-2" stroke="currentColor" />
            </button>
        </div>
    )
}