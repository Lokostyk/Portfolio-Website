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
                    djuaiwu dihau wihd huwaihdua ihwdui hwad uuhwui hdaw udih
                    djuaiwu dihau wihd huwaihdua ihwdui hwad uuhwui hdaw udih
                    djuaiwu dihau wihd huwaihdua ihwdui hwad uuhwui hdaw udih
                    djuaiwu dihau wihd huwaihdua ihwdui hwad uuhwui hdaw udih
                    djuaiwu dihau wihd huwaihdua ihwdui hwad uuhwui hdaw udih
                </p>
            </div>
        </section>
    )
}

export default Info
