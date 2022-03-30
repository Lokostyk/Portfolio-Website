import "./main.scss"
import React,{useEffect,useContext} from 'react'
import gsap from "gsap"
import CSSRulePlugin from "gsap/CSSRulePlugin"
import {LanguageContext} from "../../Context" 

gsap.registerPlugin(CSSRulePlugin)
function Main() {
    const {language,setLanguage} = useContext(LanguageContext)

    useEffect(()=>{
        const circle = document.querySelector(".mainCircle")
        const beforeRef = CSSRulePlugin.getRule(".mainContainer .mainCircle::before")
        gsap.from(beforeRef,{clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",duration:2})
        gsap.from(circle,{opacity:0,duration:2})
        gsap.to(circle.querySelectorAll(".emphasisMain"),{clipPath: "polygon(100% 0, 0 0, 0 100%, 150% 120%)",delay:1,duration:1})
    },[])
    const changeLanguage = (lan)=>{
        setLanguage(lan)
    }
    return (
        <section className="mainContainer">
            <div className="lanButtonsConatiner">
                <button onClick={()=>changeLanguage(true)}>ENG</button>
                <button onClick={()=>changeLanguage(false)}>PL</button>
            </div>
            <img className="backgroudImage" src="/Images/background.jpg"/>
            <div className="mainCircle">
                <h1>{language?"Hi":"Witam"}<br/>{language?"I am ":"Jestem "}<span className="emphasisMain">Marcin</span></h1>
                <p>{language?"Guy who creates ":"Tworzę "}<span className="emphasisMain">{language?"cool":"fajne"}</span>{language?" and ":" i "}<span className="emphasisMain">{language?"functional":"funkcjonalne"}</span>{language?" websites.":" strony internetowe."}</p>
                {language?<p>And have fun with it!</p>:<p>I dobrze się przy tym <br/> bawię!</p>}
            </div>
        </section>
    )
}

export default Main