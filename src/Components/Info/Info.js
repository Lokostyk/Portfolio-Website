import "./info.scss"
import React,{useContext, useEffect,useRef} from 'react'
import gsap,{ScrollTrigger} from "gsap/all"
import {LanguageContext} from "../../Context"

gsap.registerPlugin(ScrollTrigger)
function Info() {
    let infoRef = useRef(null)
    const {language} = useContext(LanguageContext)
    useEffect(()=>{
        gsap.to(infoRef,{scrollTrigger:{
            trigger:infoRef,
            scrub:1,
            start:"top bottom",
            end: "top top"
        },backgroundColor:"#181A18",duration:2})
        gsap.to(infoRef.querySelector(".yellowLine"),{scrollTrigger:{
            trigger:infoRef.querySelector(".yellowLine"),
            scrub:1,
            start:"top bottom",
            end: "top top"
        },width:"100%",duration:2})
        gsap.to(infoRef.querySelector(".ball"),{scrollTrigger:infoRef.querySelector(".ball"),shapeOutside: "circle(50%)",duration:1.5})
        gsap.to(infoRef.querySelector(".ball"),{scrollTrigger:infoRef.querySelector(".ball"),opacity:1,delay:1.5})
    },[])
    return (
        <section className="infoContainer" id="Info" ref={e=>infoRef=e}>
            <div className="yellowLine"/>
            <div className="subContainer">
                <div className="ball"></div>
                <p>
                    {language?
                    `I'am Marcin Ziemba, young programmer with a goal of becomming Full Stack Developer.
                    Eager to learn new things,ambitious and consistent.
                    I started programming with C++ quickly moved to web development.
                    It is what began to give me happiness and fulfillment.
                    Each of my projects is created with passion and attention to detail.
                    As a communicative and friendly person, I'am comfortable with team work and sharing my knowledge to others.`:
                    `Nazywam się Marcin Ziemba, jestem młodym programistą z celem zostania Full Stack Developerem.
                    Chętnie uczę się nowych rzeczy, jestem ambitny i sumienny.
                    Moją przygode z programowaniem zacząłem z C++.
                    Ale to właśnie tworzenie stron internetowych zaczęło dawać mi poczucie spełniena i "fun".
                    Każdy mój projekt jest tworzony z pasją i przywiązaniem do detali.
                    Jako komunikatywna i przyjazna osoba, nie mam problemu z pracą w zespole i dzieleniem się swoją wiedzą.`}
                </p>
            </div>
        </section>
    )
}

export default Info
