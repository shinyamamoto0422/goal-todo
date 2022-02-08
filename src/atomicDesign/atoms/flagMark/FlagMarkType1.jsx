import { useState } from "react";
import { BookmarkIcon } from '@heroicons/react/outline';

export const FlagMarkType1 = () => {
    const [flagButton, setFlagButton] = useState(false);
    return (
        <div class={`w-full md:h-screen ${flagButton ? 'flag' : ''}`}>
            <div class="">
                <button onClick={() => setFlagButton(!flagButton)}>
                    {flagButton ? (
                        <div class="text-indigo-300">
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
                        <div class="text-gray-300">
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