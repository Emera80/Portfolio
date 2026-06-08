import { MapPin, BriefcaseBusiness, GraduationCap , Globe  } from 'lucide-react';
import { motion } from 'framer-motion';

export default function AboutSection() {

    const aboutData = [
        {icon: <MapPin className="text-[#c15525] hover:text-white transition-colors w-6 h-6"/>, title: "LOCATION", description:"Tunis, Tunisia"  },
        {icon: <BriefcaseBusiness className="text-[#c15525] hover:text-white transition-colors w-6 h-6"/>, title: "CURRENT ROLE", description:"Full-Stack Developer & CS Student"  },
        {icon: <GraduationCap className="text-[#c15525] hover:text-white transition-colors w-6 h-6"/>, title: "EDUCATION", description:"CENTRAL UNIVERSITY\n2nd Year B.Sc. in Computer Science"  },
        {icon: <Globe className="text-[#c15525] hover:text-white transition-colors w-6 h-6"/>, title: "LANGUAGES", description:"French, English"  },
    ]

    const word = "TUOBA";
    return (
        <section
            id="about"
            className="relative min-h-screen dark:bg-[#0A0A0A] light:bg-[#ffffff] flex flex-col lg:flex-row items-center w-full overflow-visible pt-20 lg:pt-30 gap-10 lg:gap-40 px-6 lg:px-0"
            >
            <div className=" bloc1-1 hidden lg:flex flex-col items-center justify-center  text-8xl font-bold dark:text-neutral-900 light:text-neutral-100 uppercase tracking-normal w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index} className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className="flex flex-col gap-10 lg:gap-20 w-full lg:w-[90%] z-10">
                <div className="box1 flex w-full ">
                    <div className=" bloc1-2  ">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className=" bloc1-2-1 hidden md:block">
                                <h1 className="text-7xl font-bold dark:text-neutral-900 light:text-neutral-100 uppercase tracking-wide">01</h1>
                            </div>
                            <div>
                                <h2 className="text-[11px] md:text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold dark:text-white light:text-black border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase mb-4 md:mb-0">About</h2>
                                <p className="dark:text-white light:text-black font-black text-4xl md:text-7xl uppercase leading-tight">BUILDING THINGS THAT <br/> <span className="text-[#c15525]">MATTERS</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box2" >
                    <div className="bloc2-1 flex flex-col lg:flex-row gap-10 lg:gap-40">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}      // Départ : transparent et 50px plus bas
                            whileInView={{ opacity: 1, y: 0 }}  // Arrivée : opaque et position d'origine
                            transition={{ duration: 0.8, ease: "easeOut" }} // "easeOut" rend le mouvement plus fluide
                            viewport={{ once: true, margin: "-100px" }}     // L'animation commence dès que le bloc est à moins de 100px du viewport
                            className="bloc2-1-1 order-2 lg:order-1"
                        >
                            {aboutData.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 mb-4 md:mb-8 border-2 border-solid dark:border-white light:border-black p-4 dark:bg-[#0A0A0A] light:bg-[#ffffff] w-full md:w-[350px] hover:translate-x-2 hover:scale-105 transition-all duration-300 ease-in-out">
                                    <div className="border-2 border-solid border-[#c15525] inline-block p-2 dark:bg-[#0A0A0A] light:bg-[#ffffff]">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-1xl font-bold dark:text-white light:text-black">{item.title}</h3>
                                        <p className="dark:text-neutral-400 light:text-neutral-600 whitespace-pre-line mt-2">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                        <div className="bloc2-1-2 ">
                            <div>
                                <p className="dark:text-white light:text-black text-[18px] font-bold leading-relaxed">
                                    I'm a second-year Computer Science student in Tunis, turning ideas into clean,<br/> functional code. I focus on building practical web applications while constantly<br/> learning modern development standards.<br/>
                                    What I do : <br/>
                                </p>
                                <ul className="list-disc list-inside dark:text-neutral-400 light:text-neutral-600 mt-4 space-y-4">
                                    <li><span className="font-semibold">Full-Stack Dev:</span> Building intuitive interfaces with React and solid backends with Django & Spring Boot.</li>
                                    <li><span className="font-semibold">Best Practices:</span> Applying Agile (Scrum/Kanban) and preparing for ISTQB to write better, reliable code.</li>
                                    <li><span className="font-semibold">T Foundations: </span>Exploring advanced databases and Cisco network architecture.</li>
                                </ul><br/>
                                <p className="dark:text-white light:text-black text-[18px] font-bold leading-relaxed">
                                    Always eager to learn, build, and compete (proud 3rd place winner at a recent AI Hackathon).
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}