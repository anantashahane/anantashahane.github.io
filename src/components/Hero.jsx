import React from "react";

import { ButtonPrimary, ButtonOutline } from "./Button";

const Hero = () => {
    return (
        <section id="home"
        className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
            <figure className="h-full w-full">
                <img 
                src="/Images/IMG_1310.jpeg" 
                alt="Ananta Shahane" 
                className="h-full w-full object-cover" />
            </figure>
        </div>

        <div className="absolute lg:inset-x-5 inset-x-0 bottom-0 z-10 p-4 lg:p-8 border-t-[1px] border-white/20 backdrop-blur-sm rounded-t-3xl bg-gradient-to-t from-zinc-900 to-zinc-900/10 flex flex-col items-center justify-center text-center">
    <div className="container text-white">
        <div className="flex items-center gap-2 justify-center mb-2">
            <div className="stack">
                <figure className="img-box w-9 h-9 rounded-full overflow-hidden">
                    <img src="/Images/IMG_0348.jpeg" 
                    width={40}
                    height={40}
                    alt="Ananta Shahane Profile" 
                    className="img-cover object-cover"/>
                </figure>
                <span className="relative w-10 h-10 rounded-full bg-emerald-400">
                    {/* <span className="absolute w-8 h-8 inset-1 rounded-full bg-emerald-400 animate-ping"></span> */}
                </span>
            </div>
            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                Scientific Programmer at Universiteit Leiden
            </div>
        </div>
        <h2 className="heading-1 text-3xl sm:text-4xl lg:text-5xl font-bold mix-blend-difference">
            Ananta Shahane
        </h2>
        <div className="flex flex-grow justify-center items-center gap-3">
            <ButtonPrimary
                label="Download CV"
                icon="download"
                href={"Resum_.pdf"}
                target="_blank"></ButtonPrimary>
            <ButtonOutline
                label="Know More"
                icon="stat_minus_2"
                href="#education"></ButtonOutline>
        </div>
    </div>
    </div>
</section>
    )
}

export default Hero