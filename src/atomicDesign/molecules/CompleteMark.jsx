import { CheckCircleIcon } from "@heroicons/react/outline"

export const CompleteMark = ({ complete }) => {
    if (complete) {
        return (
            <div class="text-purple4 h-6 w-8 ml-12">
                <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
            </div>
        )
    } else {
        return (
            <div class="text-white2 h-6 w-8 ml-12">
                <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
            </div>
        )
    }
}