import { Link } from 'react-router-dom';
import { useState } from 'react';
import {motion} from 'framer-motion';
export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    // Fonction pour inverser l'état
    const toggleMenu = () => setIsOpen(!isOpen);
    // Fonction pour fermer le menu (utile quand on clique sur un lien)
    const closeMenu = () => setIsOpen(false);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/#about' },
        { name: 'Skills', path: '/#skills' },
        { name: 'Projects', path: '/#projects' },
        { name: 'Education', path: '/#education' },
        { name: 'Achievements', path: '/#achievements' },
        { name: 'Contact', path: '/#contact' },
    ];

    return (
        <div className="fixed top-0 left-0 w-full z-[100] px-4 md:px-8 py-6">
            <header className="max-w-7xl mx-auto flex justify-between items-center backdrop-blur-md bg-white/5 border border-white/10 rounded-full px-6 md:px-8 py-3 transition-all duration-500">

                {/* Logo ET */}
                <div className="flex items-center gap-2">
                    <Link to="/" className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center font-black text-white text-lg hover:scale-105 transition-transform duration-300">
                        ET
                    </Link>
                </div>

                {/* Navigation */}
                <nav className="hidden md:block">
                    <ul className="flex gap-2 md:gap-4 text-[10px] md:text-xs font-medium uppercase tracking-[0.2em]">
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <Link
                                    to={link.path}
                                    className="px-4 py-2 rounded-full text-white/70 hover:text-black hover:bg-orange-500 transition-all duration-300 ease-in-out"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bouton Menu Minimaliste */}
                <button
                    onClick={toggleMenu}
                    className="w-10 h-10 rounded-full md:hidden focus:outline-none bg-white/10 border border-white/20 flex flex-col items-center justify-center gap-[6px] hover:bg-white/20 transition-all duration-300 group overflow-hidden"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-[1.5px] bg-white group-hover:bg-orange-500"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-5 h-[1.5px] bg-white group-hover:bg-orange-500"
                    />
                </button>

            </header>
            {/* 2. LE VOILE SOMBRE (Backdrop) */}
            {/* Il est sorti du header. S'il est cliqué, il ferme le menu. */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 pointer-events-auto md:hidden"
                    onClick={closeMenu}
                ></div>
            )}
            {/* 2. LE PANNEAU LATÉRAL MOBILE */}
            <div
                className={`fixed top-0 right-0 h-screen w-64 bg-[#111111] border-l border-neutral-800/60 p-8 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 pointer-events-auto md:hidden ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                {/* Liens du menu mobile */}
                <ul className="flex flex-col gap-8 mt-20 text-lg font-medium text-white">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <Link
                                to={link.path}
                                onClick={closeMenu} // Ferme le menu au clic
                                className="hover:text-orange-500 transition-colors block"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}