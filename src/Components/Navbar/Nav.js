import "./nav.scss"
import React,{useContext, useEffect,useRef} from 'react'
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import {LanguageContext} from "../../Context"

gsap.registerPlugin(ScrollTrigger)
function Nav() {
    let navRef = useRef(null)
    const {language} = useContext(LanguageContext)

    useEffect(() => {
        const navbarItems = document.querySelectorAll(".navItem")
        let lastScrollPosition = document.body.getBoundingClientRect().top
        window.addEventListener("scroll",()=>{
            const currentScrollPosition = document.body.getBoundingClientRect().top
            if(lastScrollPosition>currentScrollPosition){
                Array.from(navbarItems).forEach((item)=>{
                    item.classList.remove("active")
                })
            }
            lastScrollPosition = currentScrollPosition
        })
    }, [])
    return (
        <nav className="navbar" ref={e=>navRef=e}>
                <button onClick={()=>Array.from(document.querySelectorAll(".navItem")).forEach((i)=>i.classList.add("active"))}><img src="/Images/navArrow.svg" /></button>
                <a href="#Info" className="navItem active">{language?"About me":"O mnie"}</a>
                <a href="#Projects" className="navItem active">{language?"Projects":"Projekty"}</a>
                <a href="#Skills" className="navItem active">{language?"Skills":"Umiejętności"}</a>
                <a href="#Contact" className="navItem active">{language?"Contact":"Kontakt"}</a>
        </nav>
    )
}

export default Nav
