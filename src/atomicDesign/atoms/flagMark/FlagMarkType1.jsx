import { useState } from "react";
import { BookmarkIcon } from '@heroicons/react/outline';

export const FlagMarkType1 = ({ flug }) => {
    const [flagButton, setFlagButton] = useState(false);
    return (
        <div class={`w-4 h-8 ml-1 mr-2 ${flagButton ? 'flag' : ''}`}>
            <div class="">
                <button onClick={() => setFlagButton(!flagButton)}>
                    {flagButton ? (
                        <div class="text-purple2">
                            <BookmarkIcon class="h-8 w-7" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </BookmarkIcon>
                        </div>
                    ) : (
                        <div class="text-white2">
                            <BookmarkIcon class="h-8 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                                />
                            </BookmarkIcon>
                        </div>
                    )}
                </button>
            </div>
        </div >
    );
};