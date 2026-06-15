import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiPython,
    SiDjango,
    SiMysql,
    SiPostgresql,
    SiRedis,
    SiSupabase,
    SiGit,
    SiGithub,
    SiRender,
    SiVercel,
    SiFastapi,
    SiUpstash,
    SiJetbrains
} from "react-icons/si";

import { LiaJava } from "react-icons/lia";
import { DiMsqlServer } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


export default function SkillSection() {
    const categoriesMenu = ["frontend", "backend", "database", "tools"];
    const [activeCategory, setActiveCategory] = useState("frontend");
    const word = "SLLIKS";
    //
    const skills = {
        frontend: [
            { name: "HTML", icon: <SiHtml5 color="#E34F26" /> },
            { name: "CSS", icon: <SiCss color="#1572B6" /> },
            { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
            { name: "Typescript", icon: <SiTypescript color="#3178C6" /> },
            { name: "React", icon: <SiReact color="#61DAFB" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        ],
        backend: [
            { name: "Python", icon: <SiPython color="#3776AB" /> },
            { name: "Django", icon: <SiDjango color="#092E20" /> },
            { name: "FastAPI", icon: <SiFastapi color="#05998B" /> },
            { name: "Java", icon: <LiaJava color="#ED8B00" /> },
        ],
        database: [
            { name: "MySQL", icon: <SiMysql color="#4479A1" /> },
            { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
            { name: "SQL Server", icon: <DiMsqlServer color="#CC292B" /> },
            { name: "Oracle", icon: <GrOracle color="#F80000" /> },
            { name: "Redis", icon: <SiRedis color="#DC382D" /> },
            { name: "Supabase", icon: <SiSupabase color="#3ECF8E" /> },
        ],
        tools: [
            { name: "Git", icon: <SiGit color="#F05032" /> },
            { name: "GitHub", icon: <SiGithub className="dark:text-white light:text-black" /> },
            { name: "Render", icon: <SiRender color="#46E3B7" /> },
            { name: "Vercel", icon: <SiVercel className="dark:text-white light:text-black" /> },
            { name: "Upstash", icon: <SiUpstash color="#00E9A3" /> },
            { name: "VSCode", icon: <VscVscode color="#007ACC" /> },
            { name: "JetBrains", icon: <SiJetbrains className="dark:text-white light:text-black" /> }, // ou #FFFFFF selon votre fond
        ]
    };
    return (
        <section id="skills" className="min-h-screen scroll-mt-10 dark:bg-[#0A0A0A] light:bg-[#ffffff] flex flex-col lg:flex-row items-center justify-center w-full overflow-visible gap-10 lg:gap-40 px-6 lg:px-0 pt-20 lg:pt-0">
            <div className=" bloc1 hidden lg:flex flex-col items-center justify-center text-8xl font-bold dark:text-neutral-900 light:text-neutral-100 uppercase tracking-normal w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index} className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className=" bloc2 flex flex-col gap-10 lg:gap-30 w-full lg:w-[90%] z-10">
                <div className="bloc2-1 flex w-full ">
                    <div className=" bloc2-11 mb-10 lg:mb-40  ">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className=" bloc1-2-1 hidden md:block">
                                <h1 className="text-7xl font-bold dark:text-neutral-900 light:text-neutral-100 uppercase tracking-wide">02</h1>
                            </div>
                            <div>
                                <h2 className="text-[11px] md:text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold dark:text-white light:text-black border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase mb-4 md:mb-0">Skills</h2>
                                <p className="dark:text-white light:text-black font-black text-4xl md:text-7xl uppercase leading-tight">TECHNOLOGIES I  <span className="text-[#c15525]">WORK<br className="hidden md:block" /></span> WITH</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bloc2-2 flex flex-col lg:flex-row lg:translate-y-[-40%] gap-10 lg:gap-40" >
                    <div className="bloc2-21 flex flex-row lg:flex-col gap-3 lg:gap-7 items-start overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 hide-scrollbar">
                        {categoriesMenu.map((cat) => (
                            <button key={cat} onClick={() => setActiveCategory(cat)} className={`whitespace-nowrap lg:w-full text-left px-4 lg:px-6 py-2 lg:py-4 font-bold tracking-widest uppercase transition-all duration-300 border-b-2 lg:border-b-0 lg:border-l-2 ${
                                activeCategory === cat
                                    ? 'text-orange-500 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent'
                                    : 'dark:text-neutral-500 light:text-neutral-400 border-transparent dark:hover:text-white light:hover:text-black hover:border-black/20'
                            }`}>{cat}</button>
                        ))}
                    </div>
                    {/* Bloc de droite contenant les compétences */}
                    <div className="bloc2-22 w-full max-w-5xl">

                        {/* AnimatePresence permet d'animer la sortie quand on change de catégorie */}
                        <AnimatePresence mode="wait">

                            <motion.div
                                key={activeCategory} // Clé cruciale pour déclencher l'animation au changement
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}

                                // C'EST ICI QUE LA MAGIE DE LA GRILLE OPÈRE :
                                // 1 colonne sur mobile, 2 sur tablette, 3 sur grand écran
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
                            >

                                {/* On boucle sur les compétences */}
                                {skills[activeCategory].map((skill, index) => (
                                    <motion.div
                                        key={skill.name}

                                        // Animation d'apparition en cascade (delay basé sur l'index)
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: index * 0.1, duration: 0.3 }}

                                        // Petite animation au survol de la souris
                                        whileHover={{ y: -5, scale: 1.02 }}

                                        // Le design de la carte
                                        className="flex items-center gap-4 p-4 rounded-xl dark:bg-white/5 light:bg-black/5 border dark:border-white/10 light:border-black/10 dark:hover:border-white/30 light:hover:border-black/30 dark:hover:bg-white/10 light:hover:bg-black/10 transition-colors"
                                    >
                                        {/* L'icône (la taille se gère ici avec text-...) */}
                                        <div className="text-3xl drop-shadow-lg">
                                            {skill.icon}
                                        </div>

                                        {/* Le nom de la technologie */}
                                        <div className="dark:text-white light:text-black font-bold text-lg">
                                            {skill.name}
                                        </div>

                                    </motion.div>
                                ))}

                            </motion.div>

                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    )
}
