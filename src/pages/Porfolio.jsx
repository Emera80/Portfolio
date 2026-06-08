//import React from "react";
import "../index.css"
import About from "../components/AboutSection";
import Projects from "../components/ProjectSection";
import Contact from "../components/ContactSection";
import Navbar from "../components/Navbar";
import Achievements from "../components/AchievementSection";
import Hero from "../components/HeroSection";
import {useEffect} from "react";
import {Link} from "react-router-dom";
// import Footer from "../components/Footer";
import Skills from "../components/SkillSection";


export default function Porfolio() {
    // / CE BLOC GÈRE LE DÉFILEMENT FLUIDE (SMOOTH SCROLL)
    useEffect(() => {
        if (location.hash) {
            // Si l'URL contient un # (ex: /#about), on cherche l'élément et on défile vers lui
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100); // Petit délai pour laisser la page charger
            }
        } else {
            // Si pas de #, on remonte tout en haut
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [location]);


    return (
        <div>
            <Navbar/>
            <main className="main">
                <Hero/>
                <About/>
                <Skills/>
                <Projects/>
                <Achievements/>
                <Contact/>
            {/*    <Footer/>*/}
            </main>
        </div>
    )
}