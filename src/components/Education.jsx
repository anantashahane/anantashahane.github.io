import React from "react";

import Title from "./Title";
import EducationCard from "./EducationCard";

const Education = () => {
    return (
        <section id="education">
            <Title label="Education"/>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mx-4 text-zinc-400">
              <li>
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
                <div className="timeline-start mb-10 md:text-end reveal-up">
                  <time className="font-mono italic">2021-2023</time>
                  <EducationCard imgLink={"/Images/masters.png"} title={"Foundations of Computing"} subtitle={"Universiteit Leiden (MSc.)"} body={"Quantum Algorithms, Modern Game AI, Introduction to Machine Learning, Evolutionary Algorithms, Embedded Systems, Combinatorial Algorithms, Introduction to Deep Learning, Multimedia Systems, Software Testing & Verification, Robotics, Computational Models and Semantics."} accomplishment={"Published Research Paper."} score={"Grade: 7.5/10"}/>
                  </div>
                <hr className="bg-gradient-to-b from-zinc-200 to-zinc-600"/>
              </li>
              <li>
              <hr className="bg-zinc-600"/>
                <div className="timeline-middle text-zinc-600">
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
                <div className="timeline-end reveal-up">
                    <time className="font-mono italic">2014-2018</time>
                    <EducationCard imgLink={"/Images/bachelors.png"} title={"Computer Engineering"} subtitle={"Computer Engineering (B.E.)"} body={"Object Oriented Programming, Microprocessor Architecture, Operating Systems and Administration, Data Structure and Problem Solving, Computer Graphics, Digital Signal Processing, Software Engineering, Digital Communication and Wireless Sensor Network, Embedded Operating Systems."} score={"Grade: 64%"}/>
                </div>
              </li>
            </ul>
        </section>
    )
}

export default Education