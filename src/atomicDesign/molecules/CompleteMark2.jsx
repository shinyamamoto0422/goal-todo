import { CheckCircleIcon } from "@heroicons/react/outline"
import { useState } from "react";

export const CompleteMark2 = ({ setComplete }) => {
    const [tmpComplete, setTmpComplete] = useState(false);
    const inputFalseComplete = () => {
        setComplete(true);
        setTmpComplete(true);
    };
    const inputTrueComprete = () => {
        setComplete(false);
        setTmpComplete(false);
    };
    if (tmpComplete) {
        return (
            <div class="text-purple4 h-6 w-8 ml-12">
                <button onClick={inputTrueComprete}>
                    <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
                </button>
            </div>
        )
    } else {
        return (
            <div class="text-white2 h-6 w-8 ml-12">
                <button onClick={inputFalseComplete}>
                    <CheckCircleIcon class="h-8 w-8" stroke="currentcolor" />
                </button>
            </div>
        )
    }
}