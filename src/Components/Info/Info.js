import "./info.scss"
import React,{useEffect,useRef} from 'react'
import gsap,{ScrollTrigger} from "gsap/all"

gsap.registerPlugin(ScrollTrigger)
function Info() {
    let infoRef = useRef(null)
    useEffect(()=>{
        gsap.to(infoRef,{scrollTrigger:{
            trigger:infoRef,
            scrub:1,
            start:"top bottom",
            end: "top top"
        },backgroundColor:"#181818",duration:2})
        gsap.to(infoRef.querySelector(".yellowLine"),{scrollTrigger:{
            trigger:infoRef.querySelector(".yellowLine"),
            scrub:1,
            start:"top bottom",
            end: "top top"
        },width:"100%",duration:2})
    },[])
    return (
        <section className="infoContainer" ref={e=>infoRef=e}>
            <div className="yellowLine"/>
        </section>
    )
}

export default Info
