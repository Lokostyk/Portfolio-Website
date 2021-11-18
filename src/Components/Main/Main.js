import "./main.scss"
import React,{useEffect} from 'react'
import gsap from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"

gsap.registerPlugin(CSSRulePlugin)
function Main() {
    useEffect(()=>{
        const circle = document.querySelector(".mainCircle")
        const beforeRef = CSSRulePlugin.getRule(".mainContainer .mainCircle::before")
        gsap.from(beforeRef,{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",duration:2})
        gsap.from(circle,{opacity:0,duration:2})
        gsap.from(circle.querySelectorAll(".emphasisMain"),{opacity:0,delay:1,duration:1})
    },[])

    return (
        <section className="mainContainer">
            <img className="backgroudImage" src="/Images/background.jpg"/>
            <div className="mainCircle">
                <h1>Hi<br/>I am <span className="emphasisMain">Marcin</span></h1>
                <p>Guy who creates <span className="emphasisMain">cool</span> and <span className="emphasisMain">functional</span> websites.</p>
                <p>And have fun with it!</p>
            </div>
        </section>
    )
}

export default Main