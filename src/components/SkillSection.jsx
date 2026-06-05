
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
    SiNodedotjs,
    SiUpstash,
    SiJetbrains
} from "react-icons/si";

import { LiaJava } from "react-icons/lia";
import { DiMsqlServer } from "react-icons/di";
import { GrOracle } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";



export default function SkillSection() {
    const word = "SLLIKS";
    const skills = {
        frontend: [
            {name: "HTML", icon: <SiHtml5/>},
            {name: "CSS", icon: <SiCss/>},
            {name: "JavaScript", icon: <SiJavascript/>},
            {name: "Typescript", icon: <SiTypescript/>},
            {name: "React", icon: <SiReact/>},
            {name: "Tailwind CSS", icon: <SiTailwindcss/>},
        ],
        backend:[
            {name: "Python", icon: <SiPython/>},
            {name: "Django", icon: <SiDjango/>},
            {name: "Node.js", icon: <SiNodedotjs/>},
            {name: "Java", icon: <LiaJava/>},
        ],
        database:[
            {name: "MySQL", icon: <SiMysql/>},
            {name: "PostgreSQL", icon: <SiPostgresql/>},
            {name: "SQL Server", icon: <DiMsqlServer/>},
            {name: "Oracle", icon: <GrOracle/>},
            {name: "Redis", icon: <SiRedis/>},
            {name: "Supabase", icon: <SiSupabase/>},
        ],
        tools:[
            {name: "Git", icon: <SiGit/>},
            {name: "GitHub", icon: <SiGithub/>},
            {name: "Render", icon: <SiRender/>},
            {name: "Vercel", icon: <SiVercel/>},
            {name: "Upstash", icon: <SiUpstash/>},
            {name: "VSCode", icon: <VscVscode/>},
            {name: "JetBrains", icon: <SiJetbrains/>},
        ]
    }
    return (
        <section id="skills" className="min-h-screen bg-[#0A0A0A] flex items-center justify-center w-full overflow-hidden">
            <div className=" bloc1-1 flex flex-col items-center justify-center gap-1 text-9xl font-bold text-neutral-900 uppercase tracking-wider w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index} className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className="flex flex-col gap-20  w-[90%] ">
                <div className="box1 flex w-full ">
                    <div className=" bloc1-2  ">
                        <div className="flex  gap-5">
                            <div className=" bloc1-2-1 ">
                                <h1 className="text-7xl font-bold text-neutral-900 uppercase tracking-wide">02</h1>
                            </div>
                            <div>
                                <h2 className="text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold text-white border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase">Skills</h2>
                                <p className="text-white font-black text-7xl">TECHNOLOGIES I  <span className="text-[#c15525]">WORK<br/></span> WITH</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}