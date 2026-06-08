import {FiMail, FiGithub, FiLinkedin, FiSend} from 'react-icons/fi';
import {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusMessage, setStatusMessage] = useState({type: '', text: ''});

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        setStatusMessage({type: '', text: ''});

        // NOTE: Vous devrez remplacer ces valeurs par vos propres identifiants EmailJS
        // après avoir créé un compte sur https://www.emailjs.com/
        const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
        const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
        const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then((result) => {
                console.log("SUCCESS!", result.status, result.text);
                setStatusMessage({type: 'success', text: 'Message envoyé avec succès !'});
                form.current.reset();
            }, (error) => {
                console.error("FAILED...", error);
                setStatusMessage({type: 'error', text: `Erreur : ${error.text || 'Une erreur est survenue'}`});
            })
            .finally(() => {
                setIsSending(false);
            });
    };

    const word = "TCATNOC";
    return (
        <section id="contact"
                 className="min-h-screen scroll-mt-20 bg-[#0A0A0A] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-40 pt-20 lg:pt-30 w-full overflow-visible px-6 lg:px-0">
            <div
                className=" bloc1 hidden lg:flex flex-col items-center justify-center  text-8xl font-bold text-neutral-900 uppercase tracking-normal w-[10%]">
                {word.split("").map((letter, index) => (
                    <span key={index}
                          className="-rotate-90 inline-block hover:text-[#c15525] transition-all duration-300 ease-in-out ">{letter}</span>
                ))}
            </div>
            <div className=" bloc2 flex flex-col gap-10 w-full lg:w-[90%] z-10">
                <div className="box1 flex flex-col w-full ">
                    <div className=" box1-2 lg:translate-y-[-40%] ">
                        <div className="flex flex-col md:flex-row gap-5">
                            <div className=" bloc1-2-1 hidden md:block">
                                <h1 className="text-7xl font-bold text-neutral-900 uppercase tracking-wide">05</h1>
                            </div>
                            <div>
                                <h2 className="text-[11px] md:text-[13px] translate-y-[-15%] tracking-[0.1rem] font-bold text-white border-2 border-solid border-[#c15525] inline-block px-3 py-1 uppercase mb-4 md:mb-0">Get
                                    in touch</h2>
                                <p className="text-white font-black text-4xl md:text-7xl uppercase leading-tight">LET'S BUILD<span
                                    className="text-[#c15525]"> SOMETHING</span> <br className="hidden md:block" />TOGETHER</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-6xl w-full">
                    {/* CONTENEUR PRINCIPAL EN FLEXBOX (2 colonnes) */}
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 w-full">

                        {/* =========================================
              COLONNE GAUCHE : Informations (1/3)
              ========================================= */}
                        <div className="w-full lg:w-1/3 flex flex-col gap-6">

                            {/* Carte 1 : Statut et Localisation */}
                            <div
                                className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                <span className="relative flex h-3 w-3">
                  <span
                      className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                                    <span className="text-sm font-bold tracking-widest text-white uppercase">
                  Open to opportunities
                </span>
                                </div>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    Based in Tunis, Tunisia. I respond to most messages within 24 hours. For urgent
                                    matters, email me directly.
                                </p>
                            </div>

                            {/* Carte 2 : Contact Direct et Réseaux */}
                            <div
                                className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-colors">
              <span className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-4 block">
                Direct
              </span>

                                <a href="mailto:emeraudetshiyoyo@gmail.com"
                                   className="text-white text-lg font-medium hover:text-[#c15525] transition-colors flex items-center gap-3 mb-8">
                                    <FiMail className="text-[#c15525]" size={20}/>
                                    emeraudetshiyoyo@gmail.com
                                </a>

                                <div className="flex gap-4">
                                    <a href="https://github.com/Emera80" target="_blank" rel="noreferrer"
                                       className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-[#c15525] hover:bg-[#c15525]/10 transition-all">
                                        <FiGithub size={20}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/%C3%A9meraude-tshiyoyo-7087b0406/"
                                       target="_blank" rel="noreferrer"
                                       className="p-3 bg-white/5 border border-white/10 rounded-full text-neutral-400 hover:text-white hover:border-[#c15525] hover:bg-[#c15525]/10 transition-all">
                                        <FiLinkedin size={20}/>
                                    </a>
                                </div>
                            </div>

                        </div>

                        {/* =========================================
              COLONNE DROITE : Le Formulaire (2/3)
              ========================================= */}
                        <div className="w-full lg:w-2/3 bg-[#111111] border border-white/10 rounded-2xl p-8 md:p-10">
                            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6">

                                {/* Ligne 1 : Name & Email (Flex row sur PC, Col sur mobile) */}
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label htmlFor="name"
                                               className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                                            Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="user_name"
                                            required
                                            placeholder="John Doe"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#c15525] focus:ring-1 focus:ring-[#c15525] transition-all"
                                        />
                                    </div>
                                    <div className="flex-1 flex flex-col gap-2">
                                        <label htmlFor="email"
                                               className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_email"
                                            required
                                            placeholder="john@example.com"
                                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#c15525] focus:ring-1 focus:ring-[#c15525] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Ligne 2 : Subject */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="subject"
                                           className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        placeholder="Freelance Project / Job Opportunity"
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#c15525] focus:ring-1 focus:ring-[#c15525] transition-all"
                                    />
                                </div>

                                {/* Ligne 3 : Message */}
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="message"
                                           className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                                        Project / Idea
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows="5"
                                        placeholder="What are you working on? Timelines, budgets, or wild ideas are all welcome here..."
                                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-[#c15525] focus:ring-1 focus:ring-[#c15525] transition-all resize-none"
                                    ></textarea>
                                </div>

                                {/* Message d'état */}
                                {statusMessage.text && (
                                    <div
                                        className={`p-4 rounded-lg text-sm font-medium ${statusMessage.type === 'success' ? 'bg-green-500/10 text-green-400 border border-green-500/20' : 'bg-red-500/10 text-red-400 border border-red-500/20'}`}>
                                        {statusMessage.text}
                                    </div>
                                )}

                                {/* Bouton Submit */}
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className={`mt-4 bg-[#c15525] text-white font-bold tracking-widest uppercase py-4 px-8 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center gap-3 w-full md:w-auto self-start ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isSending ? 'Sending...' : 'Send Message'} <FiSend size={18}/>
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}