import { CheckCircleIcon } from "@heroicons/react/outline"

export const CompleteMark = ({ todo, toggleComplete }) => {
    const handleComplete = () => toggleComplete(todo.id, todo.complete);
    if (todo.complete) {
        return (
            <div class="text-purple4 h-6 w-8 ml-12">
                <button onClick={handleComplete}>
                    <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
                </button>
            </div>
        )
    } else {
        return (
            <div class="text-white2 h-6 w-8 ml-12">
                <button onClick={handleComplete}>
                    <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
                </button>
            </div>
        )
    }
}