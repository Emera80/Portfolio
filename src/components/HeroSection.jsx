import '../index.css';
import photohero from '../assets/images/ChatGPT Image Jun 2, 2026, 04_41_26 PM-Photoroom2.png';
import { useState ,useEffect } from 'react';
import {motion} from 'framer-motion';


export default function HeroSection() {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > window.innerHeight * 0.2) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    },[])
    return (
        <section className={`relative min-h-screen dark:bg-[#0A0A0A] light:bg-[#ffffff] flex items-center justify-center w-full overflow-hidden pt-20 transition-all duration-700 ease-in-out ${
            isScrolled ? 'blur-md opacity-50' : 'blur-0 opacity-100'
        }`}
        id="home"
        >

            {/* =========================================
                LES 3 COUCHES CENTRALES (L'effet 3D)
            ========================================= */}

            {/* COUCHE 1 : Texte plein (Derrière la photo) */}
            {/* Ajustements : top-[62%] (plus bas) et text-[11vw] (plus petit) */}
            <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none">
                <h1 className="text-[15vw] md:text-[11vw] font-black tracking-wide dark:text-white light:text-neutral-100 uppercase leading-none">
                    EMERAUDE
                </h1>
            </div>

            {/* COUCHE 2 : La Photo et ses voiles */}
            <div className="relative z-10 h-[55vh] md:h-[75vh] flex items-end mt-10">
                <img
                    src={photohero}
                    alt="Photo de profil"
                    className="h-full object-contain object-bottom select-none drop-shadow-2xl"
                />
                <div className="absolute inset-0 pointer-events-none z-10 dark:bg-[radial-gradient(ellipse_at_center,transparent_55%,#0A0A0A_100%)] light:bg-[radial-gradient(ellipse_at_center,transparent_55%,#ffffff_100%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none z-10 dark:bg-gradient-to-t dark:from-[#0A0A0A] light:bg-gradient-to-t light:from-[#ffffff] via-transparent to-transparent"></div>
            </div>

            {/* COUCHE 3 : Texte Contour (Devant la photo) */}
            {/* Doit avoir EXACTEMENT les mêmes ajustements que la Couche 1 */}
            <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none">
                <h1 className="text-[15vw] md:text-[11vw] font-black tracking-wide text-transparent uppercase leading-none dark:[-webkit-text-stroke:1px_white] md:dark:[-webkit-text-stroke:2px_white] light:[-webkit-text-stroke:1px_black] md:light:[-webkit-text-stroke:2px_black] opacity-20">
                    EMERAUDE
                </h1>
            </div>

            {/* =========================================
                LES CONTENUS LATÉRAUX (Textes & Bouton)
            ========================================= */}
            {/* Ajustement : Remplacement de 'items-center' par 'pt-32 pb-20' pour laisser les éléments respirer sur la hauteur */}
            <div className="absolute inset-0 z-30 max-w-7xl mx-auto px-6 pointer-events-none flex flex-col md:flex-row justify-between pt-20 pb-10 md:pt-32 md:pb-20">

                {/* BLOC DE GAUCHE */}
                <div className="pointer-events-auto flex flex-col items-center md:items-start gap-4 justify-center h-auto md:h-full md:translate-y-[-20%] md:translate-x-[9%] mt-10 md:mt-0 text-center md:text-left">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold dark:text-white light:text-black leading-tight">
                        Front-<span className="text-[#c15525]">End</span> & <br className="hidden md:block" />
                        Back-<span className="text-[#c15525]">End</span> <br className="hidden md:block" />
                        Developer
                    </h2>
                    {/* Bouton mobile uniquement */}
                    <div className="md:hidden mt-4">
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="/cv.pdf"
                            className="group flex items-center gap-4 bg-[#8a3b18] text-white px-6 py-2.5 rounded-full font-bold text-sm border border-white/10 shadow-lg"
                        >
                            Resume
                            <div className="bg-white text-[#8a3b18] w-6 h-6 rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </motion.a>
                    </div>
                </div>

                {/* BLOC DE DROITE */}
                {/* Ajustement : Utilisation de justify-between pour envoyer le texte en haut et le bouton en bas */}
                <div className="pointer-events-auto flex flex-col items-end text-right justify-between h-full hidden md:flex pt-10 pb-4">

                    {/* Partie Haute : Description technique */}
                    <div className="border-l-2 border-[#c15525] pl-4 max-w-[280px] text-left mt-30">
                        <p className="dark:text-neutral-300 light:text-neutral-700 text-sm leading-relaxed">
                            Computer Science student & Full-Stack Developer. Tech enthusiast.
                        </p>
                    </div>

                    {/* Partie Basse : Accroche et Bouton */}
                    <div className="max-w-[300px] flex flex-col items-end gap-4 mt-auto">
                        <div>
                            <h3 className="text-lg font-bold text-[#c15525] mb-1">
                                Hi, I'm Emeraude.
                            </h3>
                            <p className="dark:text-neutral-400 light:text-neutral-600 text-sm leading-relaxed">
                                I design SaaS solutions and <br/> exceptional web experiences.
                            </p>
                        </div>

                        <motion.a
                            whileHover={{ scale: 1.05 }} // Grossit de 5% au survol
                            whileTap={{ scale: 0.95 }}   // Rétrécit un peu au clic (effet bouton physique)
                            href="/CV_Emeraude_TSHIYOYO_FR.pdf" download="CV_Emeraude_TSHIYOYO_FR.pdf"
                            className="group flex items-center gap-4 bg-[#8a3b18] hover:bg-[#c15525] text-white px-6 py-2.5 rounded-full font-bold text-1xl transition-all duration-300 border border-white/10 shadow-lg mt-2"
                        >
                            Resume
                            <div className="bg-white text-[#8a3b18] w-7 h-7 rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </motion.a>
                    </div>
                </div>
            </div>
        </section>
    );
}