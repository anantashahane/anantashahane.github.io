import Skill from "./Skill";
import Title from "./Title";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ProgrammingLanguages = [
    {
        logo: "Images/swift.svg",
        skill: "Swift",
        color1: "from-red-200/20",
        color2: "to-red-400"
    },
    {
        logo: "Images/c.png",
        skill: "C",
        color1: "from-blue-400/20",
        color2: "to-blue-600"
    },
    {
        logo: "Images/cpp.png",
        skill: "C++",
        color1: "from-blue-500/20",
        color2: "to-blue-700"
    },
    {
        logo: "Images/python.svg",
        skill: "Python",
        color1: "from-blue-400/20",
        color2: "to-yellow-400"
    },
    {
        logo: "Images/go.svg",
        skill: "Golang",
        color1: "from-sky-200/20",
        color2: "to-sky-600"
    },
    {
        logo: "Images/markdown.svg",
        skill: "markdown",
        color1: "from-zinc-700/20",
        color2: "to-zinc-800"
    },
    {
        logo: "Images/bash.svg",
        skill: "bash",
        color1: "from-zinc-700/20",
        color2: "to-emerald-800"
    },
    {
        logo: "Images/latex.svg",
        skill: "Latex",
        color1: "from-zinc-700",
        color2: "to-zinc-400"
    }
]

const frameWorks = [
    {
        logo: "Images/swiftui.png",
        skill: "SwiftUI",
        color1: "from-black/20",
        color2: "to-blue-600"
    },
    {
        logo: "Images/cirq.png",
        skill: "cirq",
        color1: "from-yellow-400/20",
        color2: "to-orange-400"
    },
    {
        logo: "Images/openfermion.png",
        skill: "openfermion",
        color1: "from-orange-400/20",
        color2: "to-blue-600"
    },
    {
        logo: "Images/qt.webp",
        skill: "Qt",
        color1: "from-slate-100/20",
        color2: "to-lime-400"
    },
    {
        logo: "Images/mysql.png",
        skill: "mySQL",
        color1: "from-yellow-400/20",
        color2: "to-blue-400"
    },
    {
        logo: "Images/http.svg",
        skill: "HTTP",
        color1: "from-slate-100/20",
        color2: "to-slate-200"
    },
    {
        logo: "Images/json.svg",
        skill: "json",
        color1: "from-slate-100/20",
        color2: "to-slate-200"
    },
    {
        logo: "Images/docker.svg",
        skill: "Docker",
        color1: "from-black/20",
        color2: "to-sky-300"
    },
    {
        logo: "Images/gdmc.png",
        skill: "GDMC Minecraft",
        color1: "from-slate-300/20",
        color2: "to-emerald-500"
    },
    {
        logo: "Images/sklearn.png",
        skill: "Scikit Learn",
        color1: "from-sky-300/20",
        color2: "to-orange-500"
    },
    {
        logo: "Images/keras.png",
        skill: "Keras",
        color1: "from-slate-100/20",
        color2: "to-red-500"
    },
    {
        logo: "Images/git.svg",
        skill: "Git",
        color1: "from-slate-100/20",
        color2: "to-slate-500"
    }
]

const operatingSystems = [
    {
        logo: "Images/macOS.png",
        skill: "macOS",
        color1: "from-orange-200/20",
        color2: "to-indigo-400"
    },
    {
        logo: "Images/linux.svg",
        skill: "linux",
        color1: "from-black/20",
        color2: "to-yellow-400"
    }
]

const lcontainerWidth = 156 * ProgrammingLanguages.length + 12;  
const rcontainerWidth = 156 * frameWorks.length + 12;

const SkillView = () => { 
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
    });

    return (
        <section id="skills" className="overflow-hidden">
            <Title label="Skills"/>
                <div className={"flex gap-3 scrub-slide-l p-2 " + (lcontainerWidth < screenWidth ? "justify-center" : "justify-start")}>
                    {ProgrammingLanguages.map(({logo, skill, color1, color2}, index) => (
                        <Skill key={index} logo={logo} skillName={skill} color1={color1} color2={color2} />
                        )) 
                    }
                </div>
                <div className={"flex gap-3 scrub-slide-r p-2 " + (rcontainerWidth < screenWidth ? "justify-center" : "justify-end")}>
                    {frameWorks.map(({logo, skill, color1, color2}, index) => (
                        <Skill key={index} logo={logo} skillName={skill} color1={color1} color2={color2} />
                        )) 
                    }
                </div>
                <div className="flex justify-center flex-wrap gap-3 p-2">
                    {operatingSystems.map(({logo, skill, color1, color2}, index) => (
                        <Skill key={index} logo={logo} skillName={skill} color1={color1} color2={color2} />
                        )) 
                    }
                </div>
        </section>
    )
};

export default SkillView;
export {lcontainerWidth, 
    rcontainerWidth, 
}