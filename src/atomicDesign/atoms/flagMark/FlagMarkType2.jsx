import { BookmarkIcon } from '@heroicons/react/outline';
import { useState } from 'react';

export const FlagMarkType2 = ({ setFlag }) => {
    const [tmpFlag, setTmpFlag] = useState(false);
    const inputFalseFlag = () => {
        setFlag(true);
        setTmpFlag(true);
    };
    const inputTrueFlag = () => {
        setFlag(false);
        setTmpFlag(false);
    };
    //console.log(" now tmpFlag is", tmpFlag)
    if (tmpFlag) {
        return (
            <div class="text-purple2">
                <button onClick={inputTrueFlag}>
                    <BookmarkIcon class="h-8 w-7" fill='currentcolor' stroke='currentcolor' />
                </button>
            </div>
        )
    } else {
        return (
            <div class="text-white2">
                <button onClick={inputFalseFlag}>
                    <BookmarkIcon class="h-8 w-7" fill='none' stroke='currentcolor' />
                </button>
            </div>
        )
    }
}