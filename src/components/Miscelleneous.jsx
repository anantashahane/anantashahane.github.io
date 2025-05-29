import React from "react";
import Title from "./Title";



const MiscelleneousView = () => {
    const conferences = [
        {region: "Australia",
        regionalConferences:
            [{
            conference: "GECCO 2024",
            location: "Melbourne",
            date: "2024"
            }]
        },
        {region: "The Netherlands",
        regionalConferences:
            [{
                conference: "Joint Lecture on Evolutionary Algorithms (JoLEA)",
                location: "CWI, Leiden",
                date: "2023-2024"
            },
            {
                conference: "Quantum Amsterdam",
                location: "Amsterdam",
                date: "2023"
            },
            {
                conference: "Quantum Games",
                location: "Leiden",
                date: "2023"
            }]
        },
        {region: "India",
        regionalConferences: [{
                conference: "Google Developer Conference",
                location: "Pune",
                date: "2018"
            },
            {
                conference: "GopherCon",
                location: "Pune",
                date: "2018"
            },
            {
                conference: "Free Open Source Software Meet",
                location: "Pune",
                date: "2018"
            },
            {
                conference: "Kernel Meetup",
                location: "Pune",
                date: "2017-2018"
            },
            {
                conference: "try! Swift",
                location: "Bangalore",
                date: "2017"
            }]
        }
    ];

    const hackerRank = [
        {
            skill: "C",
            level: 5
        },
        {
            skill: "C++",
            level: 5
        },
        {
            skill: "Python",
            level: 5
        },
        {
            skill: "SQL",
            level: 5
        },
        {
            skill: "Problem Solving",
            level: 5
        }
    ];

    const certificates = [
        {
            achievementName : "Fundamentals of Red Hat Enterprise Linux (RH066x)",
            date: "2019",
            provider: "edX",
            description: "Awarded for 100% completion of course, with 8 assignments, 6 weeks."
        },
        {
            achievementName : "Networking and Security in iOS Applications",
            date: "2017",
            provider: "University of California, Irvine via Coursera",
            description: "Awarded for 98% grade of course, spanning 4 months and 16 assignments."
        }
    ]

    const awards = [
        {
            achievementName : "Certificate of Excellence in Physics",
            date: "2013-2014",
            provider: "Center Point School",
            description: "Awarded for Excellence in Physics by the British Council International School Awards (1st/120)."
        },
        {
            achievementName : "International Physics Olympiad",
            date: "2014",
            provider: "Indian Association of Physics Teachers",
            description: "Awarded for securing first in the region of 23 students."
        },
        {
            achievementName : "National Cyber Olympiad",
            date: "2010",
            provider: "National Olympiad Foundation, India",
            description: "Scored #1,896 (91 percentile) in National Olympiad."
        }

    ]

    const aptitude = [
        {
            test: "GRE 2021",
            score:"316/340 (Quant: 167, Verbal: 149)"
        },
        {
            test: "ToEFL 2021",
            score:"101/120"
        }
    ]
    const languages = [
        {
            language: "English",
            proficiency:"Fluent"
        },
        {
            language: "Hindi",
            proficiency:"Fluent"
        },
        {
            language: "Marathi",
            proficiency:"Fluent"
        },
        {
            language: "Dutch",
            proficiency:"Learning...."
        },
        
    ]

    const activities = [
        {value: "Biking 3600+ km, since 2021."},
        {value: "Building PC, and tinkering with Raspberry Pi."},
        {value: "Placed 17th in National DOJO Tournament, India for Tekken 7."},
        {value: "Completed 180 km trek to Pindhari Glacier in upper Kumamon Himalayas in 5 days."},
        {value: "Olympiads: Consistently top 8 performing students in school in National Olympiads."},
        {value: "Intellectual: Passionate about Physics and Mathematics."}
    ]

    const handleClick = () => {
        // Opens the link in a new tab
        window.open('https://www.hackerrank.com/profile/ananta_shahane', '_blank');
    };


    return (
        <section id="misc">
            <Title label="Miscelleneous"/>
            <div className="mx-auto container">
                <div className="stickycard bg-green-600 top-20 text-zinc-100  items-center rounded-xl">
                    <div className="flex flex-col justify-center p-2 text-xl items-center font-bold">
                        <div className="text-3xl">HackerRank</div>
                        <div className="flex flex-col">
                            {
                                hackerRank.map(({skill, level}, index) => (
                                    <div className="bg-green-700/20 border items-center rounded-xl text-slate flex flex-row gap-2 m-2 p-4" key={"Hackerrank"+index}>
                                        <div className="text-lg">{level}</div>
                                        <span className="material-symbols-rounded">star</span>
                                        <div className="m-2"/>
                                        <div className="text-lg">{skill}</div>
                                    </div>
                                ))
                            }
                        </div>
                        <button className="flex flex-row items-center gap-2 text-3xl border p-2 rounded-full hover:bg-slate-300 hover:text-green-600" onClick={handleClick}>
                            <img src="Images/hackerrank.svg" alt="" className="w-12 h12" />
                            <span><ul>Profile</ul></span>
                        </button>
                    </div>
                </div>

                <div className="stickycard bg-slate-800 top-[6rem] text-zinc-100 rounded-xl md:mx-1">
                    <div className="flex flex-col items-center py-2 mx-2">
                        <div className="text-3xl font-bold font-mono">Conferences</div>
                        <div className="overflow-x-scroll mt-4 w-full">
                            <table className="table table-sm md:table-md table-pin-rows">
                                {conferences.map(({region, regionalConferences}, index) => (
                                    <React.Fragment key={index}>
                                        <thead>
                                            <tr className="bg-slate-600 text-slate-200" key={"Region"+index}>
                                                <th></th>
                                                <th>{region}</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {regionalConferences.map(({conference, location, date}, index2) => (
                                                <tr key={"Conference"+index2}>
                                                    <td>{date}</td>
                                                    <td>{conference}</td>
                                                    <td>{location}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </React.Fragment>
                                ))}
                            </table>
                            </div>
                    </div>
                </div>

                <div className="stickycard bg-blue-600 top-[7rem] text-zinc-100 rounded-xl md:mx-3">
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold pt-2">Certificates</div>
                        {certificates.map(({achievementName, date, provider, description}, index) => (
                            <div className="flex flex-col w-full px-4 pb-2" key={"Achievement"+index}>
                                <div className="flex flex-row pt-4">
                                    <div className="text-sm font-bold md:text-base">{provider}</div>
                                    <div className="flex-grow"></div>
                                    <div className="text-sm font-mono justify-end md:text-base">{date}</div>
                                </div>
                                    <div className="text-xs md:text-xl font-bold ml-2">{achievementName}</div>
                                    <div className="text-xs md:text-lg font-mono ml-4">{description}</div>
                            </div>
                        )
                        )}
                    </div>
                </div>

                <div className="stickycard bg-indigo-600 top-[8rem] text-zinc-100 rounded-xl md:mx-5">
                    <div className="flex flex-col items-center">
                        <div className="text-3xl font-bold pt-2">Awards</div>
                        {awards.map(({achievementName, date, provider, description}, index) => (
                            <div className="flex flex-col w-full px-4 pb-2" key={"Award"+index}>
                                <div className="flex flex-row pt-4">
                                    <div className="text-sm font-bold md:text-base">{provider}</div>
                                    <div className="flex-grow"></div>
                                    <div className="text-sm font-mono justify-end md:text-base">{date}</div>
                                </div>
                                    <div className="text-xs md:text-xl font-bold ml-2">{achievementName}</div>
                                    <div className="text-xs md:text-lg font-mono ml-4">{description}</div>
                            </div>
                        )
                        )}
                    </div>
                </div>

                <div className="stickycard bg-zinc-800 top-[9rem] text-zinc-100 rounded-xl md:mx-7">
                    <div className="flex flex-col p-2">
                        <div className="flex text-3xl items-center justify-center font-semibold">Verbal and Quant </div>
                        <div className="bg-zinc-700 rounded-lg">
                        { aptitude.map(({test, score}, index) => (
                            <div className="flex text-xs md:text-base flex-row font-mono p-2" key={"Aptitude"+index}>
                                <span className="justify-start">{test}</span>
                                <span className="flex-grow"></span>
                                <span className="justify-end">{score}</span>
                            </div>
                        ))
                        }
                        </div>
                        <div className="flex text-3xl items-center justify-center font-semibold">Languages</div>
                        <div className="bg-zinc-700 rounded-lg text-xs md:text-base">
                        { languages.map(({language, proficiency}) => (
                            <div className="flex flex-row font-mono p-2">
                                <span className="justify-start">{language}</span>
                                <span className="flex-grow"></span>
                                <span className="justify-end">{proficiency}</span>
                            </div>
                        ))
                        }
                        </div>
                    </div>
                </div>
                <div className="stickycard bg-zinc-300 top-[10rem] text-zinc-600 rounded-xl md:mx-9">
                    <div className="p-2 flex flex-col items-center">
                        <div className="text-3xl font-mono">Activities</div>
                        <div className="flex flex-col gap-2">
                            <ul className="font-mono items-center px-2 md:px-4 text-xs md:text-base">
                            {
                                activities.map(({value}, index) => (
                                    <li key={"activities"+index}>{value}</li>
                                ))
                            }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default MiscelleneousView;