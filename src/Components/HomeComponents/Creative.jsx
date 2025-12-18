import React from 'react';
import pack from "/src/assets/Gif/Pacman.gif";

function Creative() {
    return (
        <>
            <section
                className="relative w-full min-h-screen flex flex-col items-center justify-between overflow-hidden"
                style={{
                    background: 'radial-gradient(ellipse at center, #072a31, #000000)'
                }}
            >
                {/* Main Content Area with Pacman GIFs */}
                <div className="relative w-full flex-1 flex items-center justify-center px-4 sm:px-6 py-12 sm:py-20">

                    {/* Left Pacman GIF with Blur Effect */}
                    <div className="absolute top-14 left-0 sm:left-10 md:top-1/2 -translate-y-1/2 lg:block rotate-90">
                        <div className="relative">
                            {/* Blur background layer */}
                            <div className="absolute inset-0 rounded-3xl -z-10"></div>
                            <img
                                src={pack}
                                alt="Pacman Left"
                                className="size-120 sm:w-48 sm:h-60 md:w-[248px] md:h-80 object-contain relative z-10"
                            />
                        </div>
                    </div>

                    {/* Center Content Container */}
                    <div className="relative z-10 w-full max-w-6xl mx-auto text-center space-y-4 sm:space-y-6 px-4 sm:px-6">
                        {/* Top Label */}
                        <p className="text-white/70 font-normal text-sm sm:text-base tracking-wider uppercase mb-4">
                            Our vision
                        </p>

                        {/* Main Heading */}
                        <h1 className="text-white font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] leading-tight">
                            To Be the <span className="text-[#D89F5B]">Creative</span> Force Behind Brands<br className="hidden sm:block" />
                            That <span className="text-[#D89F5B]">Travel the World</span>
                        </h1>

                        {/* Description */}
                        <p className="text-white font-normal text-base sm:text-lg md:text-xl lg:text-[28px] leading-relaxed max-w-4xl mx-auto">
                            We aim to take brands in all eight directions — expanding<br className="hidden md:block" />
                            their reach while making them trusted, impactful, and<br className="hidden md:block" />
                            unforgettable.
                        </p>
                    </div>

                    {/* Right Pacman GIF with Blur Effect */}
                    <div className="absolute -bottom-50 right-0 sm:right-10 md:top-1/2  lg:block rotate-90 ">
                        <div className="relative">
                            {/* Blur background layer */}
                            <img
                                src={pack}
                                alt="Pacman Right"
                                className="size-120 sm:w-48 sm:h-60 md:w-[248px] md:h-80 object-contain transform scale-x-[-1] relative z-10"
                            />
                        </div>
                    </div>

                </div>
            </section>

        </>
    );
}

export default Creative;
