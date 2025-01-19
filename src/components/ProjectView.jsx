import React from "react";

import ProjectCard from "./ProjectCard";
import Title from "./Title";


const ProjectView = () => {

    const jobItems = [
        {
            imgLink: "/images/gvrp.png",
            title: "A Corridor Model Evolutionary Algorithm for Fast Converging Green Vehicle Routing Problem",
            subtitle: "LIACS, with Yingie Fan and Niki van Stein.",
            date: "Dec 2022-Aug 2024",
            description:"Developed a geometric heuristic to introduce the Corridor Model to Vehicle Routing Problem. \nAchieved 10% faster convergence and reducing hyperparameters from 10-12 to just 2-3. \nDesigned a novel initializer that outperformed K-means clustering by 30% efficiently. \nResearch published in the ACM Journal (GECCO 2024, Melbourne, Australia).",
            tags: ["Evolutionary Algorithms", "Swift", "Python", "OOP", "pyMOO", "NSGA-II", "manim"],
            links: [["https://github.com/anantashahane/A-Fast-Converging-Evolutionary-Algorithm-for-Green-Vehicle-Routing-Problem", "Repository", "_blank"],
            ["https://dl.acm.org/doi/10.1145/3638530.3654323", "Publication", "_blank"], ["/images/Master Thesis GECCO 2024-AI Voice Over.mp4", "Manim Video", "_blank"]]
        },
        {
            imgLink: "/images/feature-importance.tiff",
            title: "Evolutionary Feature Importance Algorithm",
            subtitle: "Hobby Project.",
            date: "October 2023",
            description:"Designed and implemented an advanced solution to compute feature importance for time series data. This tool uses evolutionary algorithms for approximating the weightings of individual time series of any kind that contribute to the final result, enabling deeper insights into complex temporal patterns.",
            tags: ["Evolutionary Strategy", "Normal Distribution", "Feature Importance", "Swift", "Python"],
            links: [["https://github.com/anantashahane/TimeSeriesDecrypter", "Repository", "_blank"]]
        },
        {
            imgLink: "/images/edge-detection.jpg",
            title: "Embedded Edge Detection",
            subtitle: "LIACS, with Dr. T.P. Setfanov.",
            date: "Jan 2023-Sept 2023",
            description:"Developed an FPGA algorithm, that efficiently perform edge-detection using Xilinx hardware.\nUtilised only 66% of the expected KPN.\n Performed edge detection at 3.75FPS, ~28% higher than peers.",
            tags: ["Sobel", "C", "Daedalus Framework", "FPGA Programming"]
        },
        {
            imgLink: "/images/GA-for-NN.jpg",
            title: "Genetic Algorithms for Neural Network Architecture Search",
            subtitle: "LIACS, with Dr. Hao Wang.",
            date: "Sept 2022-Dec 2022",
            description:"Designed genetic algorithm for searching Deep Learning Architecture for image detection.\nDiscovered links between network-depth and crossover operators, improving convergence speed & stability.",
            tags: ["Python", "nasbench", "Evolutionary Algorithm", "Deep Learning", "iOH Analyser"],
            links: [["https://github.com/anantashahane/EvolutionaryIntelligence/tree/main", "Repository", "_blank"]]
        },
        {
            imgLink: "/images/Robotics.jpg",
            title: "Robotics Perception Box",
            subtitle: "LIACS, with Dr. E.M.Bakker.",
            date: "Sept 2022-Dec 2022",
            description:"Developed a Temporal K-Nearest Neighbors algorithm to distinguish walls from furniture using LiDAR data.\nOptimized CPU utilization, enabling faster processing and precise actuation of the robot motors.",
            tags: ["Python", "Machine Learning", "CoppeliaSim", "Triganometry"]
        },
        {
            imgLink: "/images/Gaming.jpg",
            title: "2-D Search and Replace Algorithm and Minecraft Builder",
            subtitle: "LIACS, with Dr. Mike Preuss \& Piere Lulof",
            date: "Jan 2022-Mar 2022",
            description:"Worked on building a 2-D Search and Replace Algorithm, that is an iteration on the procedural content generation allowing one to build 2-D map step by step using regex like commands. \nBuilt a home using PCG in a minecraft map, using http interface to do it.",
            tags: ["Python", "gdmc", "Procedural Content Generation", "regex"],
            links: [["/report_A3_Lulof_Ananta.pdf", "2-D Search and Replace", "_blank"],
                    ["/MGAIA_1.pdf", "Minecraft HTTP", "_blank"]]
        },
        {
            imgLink: "/images/Quantum.jpg",
            title: "Quantum Algorithm: Randomised Measurement Toolbox, and Classical Shadows",
            subtitle: "LIACS, with Dr. Vedran Dunjko",
            date: "Jan 2022-Mar 2022",
            description:"Researched classical shadows in quantum computing and implemented a randomized measurement toolkit, validated its performance, and utilized it to efficiently evaluate the matrix of underlying quantum circuits. \nThis work, detailed in the research paper below, contributed to reducing the number of required samples for accurate quantum circuit analysis. \nImplemented the algorithm and validated the results it claimed.",
            tags: ["Quantum Algorithms", "Python", "cirq", "Linear Algebra", "Openfermion"],
            links: [["https://arxiv.org/abs/2203.11374", "Studied Paper", "_blank"]]
        },
        {
            imgLink: "/images/today-prod.png",
            title: "Apple Platforms Development",
            subtitle: "Freelance.",
            date: "2018-2022",
            description:`Developed, published and supported a cross platform app Today Productivity on iOS, iPadOS and macOS.
            \nBoosted productivity of 23 customers using latest Apple Technologies.`,
            tags: ["Xcode", "Swift", "SwiftUI", "RDBMS", "CloudKit", "WidgetKit", "WebDev"],
            links: [["https://anantashahane.github.io/todayapp/", "Landing Page", "_blank"]]
        },
        {
            imgLink: "/images/Gilmour.jpg",
            title: "GilmourProxy",
            subtitle: "Internship@Oogway Consulting",
            date: "2017-2018",
            description:`Built a scalable proxy for the Gilmour micro-service broker system, enabling multi-language API support.
                \nManaged 100+ micro-services under load with a single Redis instance..`,
            tags: ["Golang", "Docker", "Prometheus", "Redis", "Micro-Service", "Grafanna"],
            links: [["https://github.com/gauravsitlani/new-gilmour-proxy", "Repository", "_blank"]]
        },
        {
            imgLink: "/images/StealthAudio.jpg",
            title: "StealthAudio, Audio Steganography",
            subtitle: "Project@Pune University",
            date: "2017",
            description:`Designed and build a steganography algorithm, that takes a text and an audio file *.wav from the user, and hides the text into the provided file, 
            \nIt also able to retreive the text embedded in the audio file. The audio file sounds un-tampered despite having hidden message in it.`,
            tags: ["C++", "File System", "bitstream", "qt", "ASCII Code", "Steganography"],
            links: [["https://github.com/anantashahane/StealthAudio", "Repository", "_blank"],
                    ["/StealthAudio.zip", "Steganography.app", "_download"]]
        }
        
      ];
    
    return (
        <section id="projects">
        <Title label="Projects"/>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {jobItems.map(({imgLink, title, subtitle, date, description, tags, links}, index) => (
          <li>
            {index == 0 ? <hr className="hidden" /> : <hr className="bg-teal-400"/>}
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd" />
              </svg>
            </div>
            <div className={"reveal-up " + (index % 2 == 0 ? "timeline-start" : "timeline-end")}>
                <time className={index % 2 == 0 ? "font-mono italic md:text-right" : "font-mono italic"}>{date}</time>
                <ProjectCard imgLink={imgLink} title={title} subtitle={subtitle} description={description} tags={tags} links={links} key={index}/>
            </div>
            {index == jobItems.length - 1 ? <hr className="hidden" /> : <hr className="bg-teal-400"/>}
          </li>
          ))}
        </ul>
        </section>
    )       
}

export default ProjectView;