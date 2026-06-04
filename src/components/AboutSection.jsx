

export default function AboutSection() {

    const word = "TUOBA";
    return (
        <section id="about" className="relative min-h-screen bg-[#0A0A0A] flex items-center justify-center w-full overflow-hidden pt-20">
            <div className="flex w-full  ">
                <div className="flex flex-col items-center justify-center gap-1 text-9xl font-bold text-neutral-900 uppercase tracking-wider w-1/5">
                    {word.split("").map((letter, index) => (
                        <span key={index} className="-rotate-90 inline-block">{letter}</span>
                    ))}
                </div>
                <div className="w-4/5 ">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
                        About <span className="text-[#c15525]">Me</span>
                    </h1>
                    <p className="text-neutral-400 text-center mt-4 max-w-2xl">
                        I'm a passionate Full-Stack Developer with a strong background in Computer Science. I specialize in creating dynamic and user-friendly web applications using modern technologies.
                    </p>
                </div>
            </div>
        </section>
    )
}