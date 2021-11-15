import "./nav.scss"
import React,{useEffect,useRef} from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function Nav() {
    let navRef = useRef(null)
    useEffect(() => {
        const tl = gsap.timeline({})
        gsap.to(navRef.querySelector(".a"),{scrollTrigger:{
            trigger: navRef.querySelector(".a"),
            scrub: 1,
            start:"middle top",
            end:"bottom top",
            markers:true
        },
        duration:3,marginRight:`auto`})
    }, [])
    return (
        <nav className="navbar" ref={e=>navRef=e}>
            <div className="animationBox a">
                <a className="navItem">Info</a>
                <a className="navItem">Skills</a>
            </div>
            <div className="animationBox b">
                <a className="navItem">Projects</a>
                <a className="navItem">Contact</a>
            </div>
        </nav>
    )
}

export default Nav
