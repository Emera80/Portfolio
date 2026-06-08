import { useRef } from 'react';
import { motion } from 'framer-motion';
// N'oubliez pas d'importer vos icônes (Github, lien externe, etc.)
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import foodmarketImg from '../assets/images/foodmarket2.png';
import agribotImg from '../assets/images/agribot.png';
import studentCardImg from '../assets/images/student-card.png';
import casinoImg from '../assets/images/casino.png';

export default function ProjectSection() {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = direction === 'left' ? -400 : 400;
            carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };
    const word = "STCEJORP";
    const projectsData = [
        {
            id: 1,
            title: "FOODMARKET",
            category: "DISTRIBUTED E-COMMERCE",
            image: foodmarketImg, // Remplace par le bon chemin
            shortDesc: "A highly performant, fully decoupled e-commerce application with secure checkout and serverless caching.",
            details: [
                "Engineered a stateless Django REST API deployed on Render",
                "Integrated Upstash Redis for high-speed serverless cart management",
                "Implemented secure end-to-end payments using Stripe and PostgreSQL on Supabase"
            ],
            tech: ["React", "Django REST", "Supabase", "Redis", "Stripe", "Render", "Vercel", "Upstash"],
            github: "https://github.com/Emera80/foodmarket",
            live: "https://foodmarket-frontend.vercel.app/"
        },
        {
            id: 2,
            title: "AGRIBOT AI",
            category: "AI & AGRITECH (3RD PLACE HACKATHON)",
            image: agribotImg,
            shortDesc: "An intelligent mobile-first voice assistant providing real-time, localized agronomic advice to farmers.",
            details: [
                "Won 3rd place in the 2026 University Agritech Hackathon",
                "Developed a lightweight RAG architecture parsing local data and OpenWeatherMap API",
                "Integrated OpenCV for visual crop disease analysis via leaf scanning"
            ],
            tech: ["React", "Django", "OpenRouter AI", "OpenCV", "Vercel", "Supabase", "Render"],
            github: "https://github.com/Emera80/Hackathon-Agritech",
            live: "https://agritech-frontend-tau.vercel.app/"
        },
        {
            id: 3,
            title: "STUDENT-CARD GENERATOR",
            category: "AUTOMATION & CLOUD SYSTEM",
            image: studentCardImg,
            shortDesc: "An automated system for generating secure student ID cards with unique QR codes optimized for cloud deployment.",
            details: [
                "Automated Base64 URL-safe QR code generation using Django signals",
                "Optimized RAM usage with BytesIO buffers, eliminating local disk writes for Render deployment",
                "Integrated Cloudinary for seamless and fast cloud image hosting"
            ],
            tech: ["Python", "Django", "Pillow", "Cloudinary", "Render"],
            github: "https://github.com/Emera80/StudentCard-Generator",
            live: "https://studentcard-generator.onrender.com"
        },
        {
            id: 4,
            title: "CASINO ROYALE",
            category: "VANILLA JS SPA",
            image: casinoImg,
            shortDesc: "An interactive, fluid mini-game platform built entirely from scratch without heavy frontend frameworks.",
            details: [
                "Architected a modular Single Page Application (SPA) using pure ES6 JavaScript",
                "Built a custom financial manager using sessionStorage and requestAnimationFrame",
                "Designed a modern Glassmorphism 2.0 interface with complex CSS3 transitions"
            ],
            tech: ["Vanilla JS (ES6+)", "HTML5", "CSS3 Animations", "GitHub Pages"],
            github: "https://github.com/Emera80/CASINO-ROYAL",
            live: "https://emera80.github.io/CASINO-ROYAL/"
        }
    ];

    return (

        <section id="projects" className="min-h-screen scroll-mt-45 bg-[#0A0A0A] flex items-center justify-center gap-40 w-full overflow-visible">
            <div className=" bloc1 flex flex-col items-center justify-center text-8xl font-bold text-neutral-900 uppercase tracking-normal w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index} className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className=" bloc2 flex flex-col gap-10  w-[90%] z-10">
                <div className="box1 flex flex-col w-full ">
                    <div className=" box1-2 translate-y-[-40%] ">
                        <div className="flex  gap-5">
                            <div className=" bloc1-2-1 ">
                                <h1 className="text-7xl font-bold text-neutral-900 uppercase tracking-wide">03</h1>
                            </div>
                            <div>
                                <h2 className="text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold text-white border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase">Projects</h2>
                                <p className="text-white font-black text-7xl">A SMALL SET OF THINGS I'M<br/>  <span className="text-[#c15525]">PROUD </span>TO HAVE BUILT</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box2 max-w-7xl  px-6 w-full ">
                    {/* EN-TÊTE : Titre et Boutons de navigation */}
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <p className="text-neutral-400 mt-2">Swipe to explore my recent work.</p>
                        </div>

                        {/* Boutons Gauche / Droite */}
                        <div className="flex gap-4">
                            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:text-white transition-all text-neutral-400">
                                <FiChevronLeft size={24} />
                            </button>
                            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-orange-500 hover:text-white transition-all text-neutral-400">
                                <FiChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                    {/* LE CARROUSEL */}
                    <div
                        ref={carouselRef}
                        // snap-x et snap-mandatory forcent le défilement à s'arrêter pile sur une carte
                        // hide-scrollbar (à ajouter dans votre CSS global) cache la barre de défilement moche
                        className="flex overflow-x-auto snap-x snap-mandatory gap-8 pb-10 hide-scrollbar"
                    >
                        {projectsData.map((project) => (
                            <div
                                key={project.id}
                                // min-w force la largeur de la carte. On utilise la classe "group" pour déclencher le hover
                                className="group relative flex-none w-[85vw] md:w-[450px] snap-center bg-[#111111] rounded-2xl border border-white/10 overflow-hidden hover:border-white/30 transition-colors duration-500"
                            >

                                {/* IMAGE DU PROJET */}
                                <div className="h-56 overflow-hidden relative">
                                    {/* L'image zoome légèrement au survol de la carte (group-hover) */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />
                                    {/* Dégradé noir en bas de l'image pour que le texte soit lisible */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
                                </div>

                                {/* CONTENU DE LA CARTE */}
                                <div className="p-6 relative">
                <span className="text-orange-500 text-xs font-bold tracking-widest uppercase mb-2 block">
                  {project.category}
                </span>
                                    <h3 className="text-2xl font-black text-white mb-3 uppercase tracking-wide">
                                        {project.title}
                                    </h3>

                                    <p className="text-neutral-400 text-sm mb-4">
                                        {project.shortDesc}
                                    </p>

                                    {/* LA MAGIE DU HOVER : Les détails cachés */}
                                    {/* max-h-0 cache l'élément. group-hover:max-h-40 le déploie au survol ! */}
                                    <div className="max-h-0 opacity-0 overflow-hidden group-hover:max-h-40 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                                        <ul className="mb-6 space-y-2">
                                            {project.details.map((detail, i) => (
                                                <li key={i} className="text-sm text-neutral-300 flex items-start gap-2">
                                                    <span className="text-orange-500 mt-1">✓</span>
                                                    {detail}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* LES TAGS */}
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.tech.map((tech, i) => (
                                            <span key={i} className="px-3 py-1 text-xs font-medium text-neutral-300 bg-white/5 border border-white/10 rounded-sm">{tech}</span>
                                        ))}
                                    </div>

                                    {/* LES BOUTONS GITHUB & LIVE (Comme sur votre image) */}
                                    <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                                        <a href={project.github} target="_blank" rel="noreferrer" className="p-2 border border-white/10 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                            <FiGithub size={20} />
                                        </a>
                                        <a href={project.live} target="_blank" rel="noreferrer" className="p-2 border border-white/10 rounded-md text-neutral-400 hover:text-white hover:bg-white/10 transition-colors">
                                            <FiExternalLink size={20} />
                                        </a>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}