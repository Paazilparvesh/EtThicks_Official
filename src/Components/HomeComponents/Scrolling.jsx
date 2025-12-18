import React from 'react'
import pack from "/src/assets/Gif/Pacman.gif";

const Scrolling = () => {
    return (
        <>
            <div div className="w-full h-auto flex items-center overflow-hidden bg-[#007388]  -rotate-1 mb-2.5" >
                <div className="animate-scroll-text flex items-center justify-center gap-3 sm:gap-4 px-6 sm:px-10 h-full w-max">
                    {/* Double the content for seamless looping */}
                    {[...Array(4)].map((_, setIndex) => (
                        <React.Fragment key={setIndex}>
                            {Array(6).fill("EtThicks").map((word, i) => (
                                <React.Fragment key={`${setIndex}-${i}`}>
                                    <span className="text-white text-3xl sm:text-xl md:text-2xl font-semibold tracking-wide whitespace-nowrap">
                                        {word}
                                    </span>
                                    {i !== 4 && (
                                        <img
                                            src={pack}
                                            alt="divider"
                                            className="size-14 sm:w-10 md:w-20 shrink-0"
                                        />
                                    )}
                                </React.Fragment>
                            ))}
                        </React.Fragment>
                    ))}
                </div>
            </div >

            {/* Animation CSS */}
            <style jsx>{`
                @keyframes scroll-text {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll-text {
                    animation: scroll-text 20s linear infinite;
                }
            `}</style>

        </>
    )
}

export default Scrolling