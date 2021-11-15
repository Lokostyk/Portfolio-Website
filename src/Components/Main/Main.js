import "./main.scss"
import React,{useEffect} from 'react'
import gsap from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"

gsap.registerPlugin(CSSRulePlugin)
function Main() {
    useEffect(()=>{
        const y = document.querySelector(".mainCircle")
        console.log(y)
        const beforeRef = CSSRulePlugin.getRule(".mainContainer .mainCircle::before")
        console.log(beforeRef)
        gsap.from(beforeRef,{clipPath: "polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)",duration:2})
    },[])

    return (
        <section className="mainContainer">
            <img className="backgroudImage" src="/Images/background.jpg"/>
            <div className="mainCircle">
                <h1>Hi, I am <br/><span className="blue">Marcin Ziemba</span></h1>
                <p>Guy who creates <span className="blue">cool</span> and <span className="blue">functional</span> websites.</p>
                <p>And have fun with it!</p>
            </div>
        </section>
    )
}

export default Main