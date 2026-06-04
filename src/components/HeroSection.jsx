import '../index.css';
import photohero from '../assets/images/ChatGPT Image Jun 2, 2026, 04_41_26 PM-Photoroom2.png';
import { useState ,useEffect } from 'react';


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
        <section className={`relative min-h-screen bg-[#0A0A0A] flex items-center justify-center w-full overflow-hidden pt-20 transition-all duration-700 ease-in-out ${
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
                <h1 className="text-[11vw] font-black tracking-wide text-white uppercase leading-none">
                    EMERAUDE
                </h1>
            </div>

            {/* COUCHE 2 : La Photo et ses voiles */}
            <div className="relative z-10 h-[65vh] md:h-[75vh] flex items-end mt-10">
                <img
                    src={photohero}
                    alt="Photo de profil"
                    className="h-full object-contain object-bottom select-none drop-shadow-2xl"
                />
                <div className="absolute inset-0 pointer-events-none z-10 bg-[radial-gradient(ellipse_at_center,transparent_55%,#0A0A0A_100%)]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1/3 pointer-events-none z-10 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A/80] to-transparent"></div>
            </div>

            {/* COUCHE 3 : Texte Contour (Devant la photo) */}
            {/* Doit avoir EXACTEMENT les mêmes ajustements que la Couche 1 */}
            <div className="absolute top-[62%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-20 pointer-events-none">
                <h1 className="text-[11vw] font-black tracking-wide text-transparent uppercase leading-none [-webkit-text-stroke:1.5px_white] md:[-webkit-text-stroke:2px_white]">
                    EMERAUDE
                </h1>
            </div>

            {/* =========================================
                LES CONTENUS LATÉRAUX (Textes & Bouton)
            ========================================= */}
            {/* Ajustement : Remplacement de 'items-center' par 'pt-32 pb-20' pour laisser les éléments respirer sur la hauteur */}
            <div className="absolute inset-0 z-30 max-w-7xl mx-auto px-6 pointer-events-none flex flex-col md:flex-row justify-between pt-32 pb-20 md:py-24">

                {/* BLOC DE GAUCHE */}
                {/* Ajustement : Ajout de h-full et justify-center pour qu'il reste bien au milieu verticalement */}
                <div className="pointer-events-auto flex flex-col items-start gap-4 justify-center h-full translate-y-[-20%] translate-x-[9%]">
                    {/*<div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300 font-medium">*/}
                    {/*    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>*/}
                    {/*    Available for Work*/}
                    {/*</div>*/}

                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Front-<span className="text-[#c15525]">End</span> &   <br />
                        Back-<span className="text-[#c15525]">End</span> <br />
                        Developer <br />
                    </h2>
                </div>

                {/* BLOC DE DROITE */}
                {/* Ajustement : Utilisation de justify-between pour envoyer le texte en haut et le bouton en bas */}
                <div className="pointer-events-auto flex flex-col items-end text-right justify-between h-full hidden md:flex pt-10 pb-4">

                    {/* Partie Haute : Description technique */}
                    <div className="border-l-2 border-[#c15525] pl-4 max-w-[280px] text-left mt-30">
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Computer Science student & Full-Stack Developer. Tech enthusiast.
                        </p>
                    </div>

                    {/* Partie Basse : Accroche et Bouton */}
                    <div className="max-w-[300px] flex flex-col items-end gap-4 mt-auto">
                        <div>
                            <h3 className="text-lg font-bold text-[#c15525] mb-1">
                                Hi, I'm Emeraude.
                            </h3>
                            <p className="text-neutral-400 text-sm leading-relaxed">
                                I design SaaS solutions and <br/> exceptional web experiences.
                            </p>
                        </div>

                        <a
                            href="/cv.pdf"
                            className="group flex items-center gap-4 bg-[#8a3b18] hover:bg-[#c15525] text-white px-6 py-2.5 rounded-full font-bold text-1xl transition-all duration-300 border border-white/10 shadow-lg mt-2"
                        >
                            Resume
                            <div className="bg-white text-[#8a3b18] w-7 h-7 rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14"></path>
                                    <path d="m12 5 7 7-7 7"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}