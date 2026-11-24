import '../index.css';
import photohero from '../assets/images/ChatGPT Image Jun 2, 2026, 04_41_26 PM-Photoroom2.png';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showResumeMenu, setShowResumeMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.2);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section
            className={`relative min-h-screen dark:bg-[#0A0A0A] light:bg-[#f3f4f6] flex items-center justify-center w-full overflow-hidden px-6 transition-all duration-700 ease-in-out ${
                isScrolled ? 'blur-md opacity-50' : 'blur-0 opacity-100'
            }`}
            id="home"
        >
            <div className="flex flex-col items-center text-center max-w-4xl pt-28 pb-16">
                <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="relative mb-12"
                >
                    <div className="absolute -inset-8 rounded-full bg-[#c15525]/15 blur-3xl" />
                    <div className="relative h-[118px] w-[118px] md:h-[132px] md:w-[132px] rounded-full p-[3px] dark:bg-white/25 light:bg-black/10 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.7)]">
                        <img
                            src={photohero}
                            alt="Emeraude"
                            className="h-full w-full rounded-full object-cover object-[center_16%] select-none"
                        />
                    </div>
                    <span
                        className="absolute top-1.5 right-1.5 h-3.5 w-3.5 rounded-full bg-[#3DDC84] ring-[3px] dark:ring-[#0A0A0A] light:ring-[#f3f4f6]"
                        aria-hidden="true"
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-[11px] md:text-xs font-medium tracking-[0.32em] uppercase dark:text-neutral-500 light:text-neutral-500 mb-7"
                >
                    Front-<span className="text-[#c15525]">End</span> & Back-<span className="text-[#c15525]">End</span> Developer
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.16 }}
                    className="text-5xl sm:text-7xl md:text-8xl font-black leading-[0.92] tracking-tight dark:text-white light:text-neutral-950"
                >
                    Hi, I&apos;m
                    <span className="block mt-1 font-['Instrument_Serif',Georgia,serif] italic font-normal tracking-normal">
                        Emeraude.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.26 }}
                    className="mt-8 max-w-md text-sm md:text-[15px] leading-relaxed dark:text-neutral-400 light:text-neutral-600"
                >
                    Computer Science student & Full-Stack Developer.
                    <br />
                    I design SaaS solutions and exceptional web experiences.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.34 }}
                    className="relative z-50 mt-10"
                >
                    <button
                        onClick={() => setShowResumeMenu(!showResumeMenu)}
                        className="group flex items-center gap-4 bg-[#8a3b18] hover:bg-[#c15525] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 border border-white/10 shadow-lg"
                    >
                        Resume
                        <div className="bg-white text-[#8a3b18] w-7 h-7 rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                            </svg>
                        </div>
                    </button>
                    {showResumeMenu && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-xl py-2 z-50 flex flex-col items-center gap-2 border border-black/10 dark:border-white/10">
                            <a href="/CV_Emeraude_TSHIYOYO_FR.pdf" download="CV_Emeraude_TSHIYOYO_FR.pdf" className="text-sm text-black dark:text-white hover:text-[#c15525]">FR</a>
                            <a href="/CV_Emeraude_TSHIYOYO_EN.pdf" download="CV_Emeraude_TSHIYOYO_EN.pdf" className="text-sm text-black dark:text-white hover:text-[#c15525]">EN</a>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
