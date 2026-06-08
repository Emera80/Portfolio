import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
export default function AchievementSection() {
    const word = "SDRAWA";
    // 1. On crée une référence pour cibler la zone de la timeline
    const containerRef = useRef(null);

    // 2. On récupère la progression du scroll dans cette zone spécifique
    const { scrollYProgress } = useScroll({
        target: containerRef,
        // L'animation commence quand le haut du conteneur atteint le centre de l'écran
        // et finit quand le bas du conteneur atteint le centre de l'écran.
        offset: ["start center", "end center"],
    });

    const achievementsData = [
        {
            id: 1,
            title: "3rd Place Winner - University Hackathon",
            project: "Agribot AI",
            date: "April 2026",
            description : "Developed an AI-powered agricultural bot under strict time constraints. Collaborated with a team to integrate machine learning solutions for crop optimization, showcasing problem-solving and rapid prototyping skills."
        },
        {
            id:2,
            title: "Python Developer - Complete Bootcamp",
            project: "Udemy (Instructors: Jonathan Roux & ChatGPT AI)",
            date: "June 2026",
            description : "Completed a comprehensive 69.5-hour training program  focused on advanced Python development, further strengthening backend programming and scripting capabilities."
        }
    ]

    return (
        <section id="awards" className="min-h-screen scroll-mt-10 bg-[#0A0A0A] flex items-center justify-center gap-40 pt-30 w-full overflow-visible">
            <div className=" bloc1 flex flex-col items-center justify-center  text-8xl font-bold text-neutral-900 uppercase tracking-normal w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index} className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className=" bloc2 flex flex-col gap-10  w-[90%] z-10">
                <div className="box1 flex flex-col w-full ">
                    <div className=" box1-2 translate-y-[-40%] ">
                        <div className="flex  gap-5">
                            <div className=" bloc1-2-1 ">
                                <h1 className="text-7xl font-bold text-neutral-900 uppercase tracking-wide">04</h1>
                            </div>
                            <div>
                                <h2 className="text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold text-white border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase">Awards & Certifications</h2>
                                <p className="text-white font-black text-7xl">PROOF OF MY PASSION BEYOND<br/>THE<span className="text-[#c15525]"> CLASSROOM</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-4xl">
                    {/* EN-TÊTE DE LA SECTION */}

                    {/* CONTENEUR DE LA TIMELINE */}
                    <div ref={containerRef} className="relative">

                        {/* =========================================
              LA LIGNE DE FOND (Gris clair / Transparente)
              ========================================= */}
                        <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-1 bg-white/10 rounded-full"></div>

                        {/* =========================================
              LA LIGNE ANIMÉE (Orange qui se remplit)
              ========================================= */}
                        <motion.div
                            className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-1 bg-[#c15525] rounded-full origin-top"
                            style={{ scaleY: scrollYProgress }} // Magie : la hauteur suit le scroll !
                        ></motion.div>

                        {/* LES CARTES (Items de la timeline) */}
                        <div className="flex flex-col gap-16">
                            {achievementsData.map((item, index) => (
                                <div key={item.id} className="relative pl-12 md:pl-24">

                                    {/* Le petit point (cercle) sur la ligne */}
                                    <div className="absolute left-[11px] md:left-[19px] top-6 h-3 w-3 bg-[#0A0A0A] border-2 border-[#c15525] rounded-full z-10"></div>

                                    {/* La Carte d'accomplissement */}
                                    <motion.div
                                        // Animation classique d'apparition depuis la droite pour chaque carte
                                        initial={{ opacity: 0, x: 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: 0.1 }}
                                        viewport={{ once: true, margin: "-50px" }}

                                        className="bg-[#111111] border border-white/10 rounded-2xl p-6 md:p-8 hover:border-white/30 hover:bg-white/5 transition-all duration-300 group"
                                    >
                                        {/* En-tête de la carte : Titre + Date */}
                                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-4">
                                            <h3 className="text-2xl font-bold text-white group-hover:text-[#c15525] transition-colors">
                                                {item.title}
                                            </h3>
                                            <span className="text-sm font-mono text-neutral-400 bg-white/5 px-4 py-1.5 rounded-full whitespace-nowrap border border-white/5">{item.date}</span>
                                        </div>

                                        {/* Projet / Contexte */}
                                        <h4 className="text-[#c15525] font-semibold mb-5 text-sm uppercase tracking-widest">
                                            {item.project}
                                        </h4>

                                        {/* Description */}
                                        <p className="text-neutral-400 leading-relaxed text-sm md:text-base">
                                            {item.description}
                                        </p>
                                    </motion.div>

                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </section>
    )
}