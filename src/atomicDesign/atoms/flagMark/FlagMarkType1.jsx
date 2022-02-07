import { useState } from "react";

export const FlagMarkType1 = () => {
    const [flagButton, setFlagButton] = useState(false);
    return (
        <div class={`w-full md:h-screen ${flagButton ? 'flag' : ''}`}>
            <div class="">
                <button onClick={() => setFlagButton(!flagButton)}>
                    {flagButton ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" color="Indigo-500">
                            <path
                                d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z"
                            />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div >
    );
};