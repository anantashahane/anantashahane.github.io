import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { lcontainerWidth, rcontainerWidth } from "./components/SkillsView";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Education from "./components/Education";
import ProjectView from "./components/ProjectView";
import SkillView from "./components/SkillsView";
import MiscelleneousView from "./components/Miscelleneous";
import Contacts from "./components/Contacts";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const App = () => {

    useGSAP(() => {
        const elements = gsap.utils.toArray(".reveal-up");
        const lElements = gsap.utils.toArray(".scrub-slide-l");
        const rElements = gsap.utils.toArray(".scrub-slide-r");
        
        elements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: true,
                    start: '-200 bottom',
                    end: 'bottom 80%',
                },
                y: 0,
                opacity: 1,
                ease: 'power2.out'
            })
        })

        lElements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: 1,
                    start: '0% 80%',
                    end: "bottom 12%",
                },
                x: window.innerWidth < lcontainerWidth ? (window.innerWidth - lcontainerWidth) : 0,
            })
        })

        rElements.forEach((element) => {
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    scrub: 1,
                    start: '0% 80%',
                    end: "bottom 12%",
                },
                x: window.innerWidth < rcontainerWidth ? (rcontainerWidth - window.innerWidth) : 0,
            })
        })
        

        window.addEventListener("load", function () {
            // this code will run AFTER all ScrollTriggers refreshed.
            ScrollTrigger.refresh;
          });

        window.addEventListener("resize", function () {
            ScrollTrigger.refresh;
        })
    });

    return (
        <>
        <Header />
        <main>
            <Hero />
            <Education />
            <ProjectView/>
            <SkillView/>
            <MiscelleneousView/>
            <Contacts/>
        </main>
        </>
    )

}

export default App;