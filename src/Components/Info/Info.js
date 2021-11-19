import "./info.scss"
import React,{useEffect,useRef} from 'react'
import gsap,{ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
function Info() {
    let infoRef = useRef(null)
    const tl = gsap.timeline({duration:1})
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
        <section className="infoContainer" ref={e=>infoRef=e}>
            <div className="yellowLine"/>
            <div className="subContainer">
                <div className="ball" />
                <p>
                    I'am Marcin Ziemba, young programmer with a goal of becomming Frontend Developer.
                    Eager to learn new things,ambitious and consistent.
                    I started programming with C++ quickly moved to web development.
                    It is what began to give me happiness and fulfillment.
                    Each of my projects is created with passion and attention to detail.
                    As a communicative and friendly I'am comfortable with team work and sharing my knowledge to others.
                </p>
            </div>
        </section>
    )
}

export default Info
