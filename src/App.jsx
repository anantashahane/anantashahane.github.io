import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";



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
    })

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