import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export default function Footer() {
    return (
        <footer className="dark:bg-[#0A0A0A] light:bg-[#ffffff] pt-32 pb-8 px-6">
            <div className="max-w-6xl mx-auto">

                {/* LE NOM GÉANT */}
                {/* leading-none permet de coller les deux lignes comme sur votre image */}
                <div className="mb-12">
                    <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black dark:text-white light:text-black uppercase leading-none tracking-tighter">
                        EMERAUDE <br /> TSHIYOYO
                    </h1>
                </div>

                {/* LA LIGNE DE SÉPARATION */}
                <hr className="border-t dark:border-white/10 light:border-black/10 mb-8" />

                {/* LA BARRE DU BAS (Copyright & Icônes) */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Copyright */}
                    <p className="dark:text-neutral-500 light:text-neutral-500 text-xs font-bold tracking-widest uppercase">
                        © 2026 EMERAUDE
                    </p>

                    {/* Les Icônes (en tout petit, avec des bordures carrées) */}
                    <div className="flex gap-3">
                        <a
                            href="https://github.com/Emera80"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 border dark:border-white/10 light:border-black/10 rounded-sm dark:text-neutral-400 light:text-neutral-600 dark:hover:text-white light:hover:text-black dark:hover:border-[#c15525] light:hover:border-[#c15525] dark:hover:bg-[#c15525]/10 light:hover:bg-[#c15525]/10 transition-all duration-300"
                        >
                            <FiGithub size={16} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/%C3%A9meraude-tshiyoyo-7087b0406/"
                            target="_blank"
                            rel="noreferrer"
                            className="p-2.5 border dark:border-white/10 light:border-black/10 rounded-sm dark:text-neutral-400 light:text-neutral-600 dark:hover:text-white light:hover:text-black dark:hover:border-[#c15525] light:hover:border-[#c15525] dark:hover:bg-[#c15525]/10 light:hover:bg-[#c15525]/10 transition-all duration-300"
                        >
                            <FiLinkedin size={16} />
                        </a>
                        <a
                            href="mailto:emeraudetshiyoyo@gmail.com"
                            className="p-2.5 border dark:border-white/10 light:border-black/10 rounded-sm dark:text-neutral-400 light:text-neutral-600 dark:hover:text-white light:hover:text-black dark:hover:border-[#c15525] light:hover:border-[#c15525] dark:hover:bg-[#c15525]/10 light:hover:bg-[#c15525]/10 transition-all duration-300"
                        >
                            <FiMail size={16} />
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
}