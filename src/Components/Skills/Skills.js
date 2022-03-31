import "./skills.scss"

import React,{useContext, useEffect,useRef} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import {LanguageContext} from "../../Context"

gsap.registerPlugin(ScrollTrigger)
function Skills() {
    const {language} = useContext(LanguageContext)
        //     {img:"figma.svg",name:"Figma"},
        // {img:"github.svg",name:"GitHub/Git"},
    const skillsListFrontend = [
        {img:"html.svg",name:"HTML"},
        {img:"css.svg",name:"CSS"},
        {img:"sass.svg",name:"Sass"},
        {img:"javascript.svg",name:"Javascript(ES6)"},
        {img:"typescript.svg",name:"Typescript"},
        {img:"react.svg",name:"React"},
        {img:"redux.svg",name:"React-redux"},
        {img:"jest.svg",name:"Jest"},
        {img:"cypress.svg",name:"Cypress"}
    ]
    const skillsListBackend = [
        {img:"nodejs.svg",name:"Node Js"},
        {img:"express.svg",name:"Express"},
        {img:"mongodb.svg",name:"MongoDB"},
    ]

    let containerRef = useRef(null)
    useEffect(()=>{
        const allSkills = containerRef.getElementsByTagName("li")
        const allSkillsImages = containerRef.getElementsByTagName("img")
        const allSkillsNames = containerRef.getElementsByTagName("span")
        const tl = gsap.timeline({duration:1})
        const mobileAndBigScreens = document.body.clientWidth < 1200 || document.body.clientHeight > 1000
        setTimeout(()=>{
            Array.from(allSkillsImages).forEach((el)=>{
                tl.from(el,{scrollTrigger:{
                    trigger:el,
                    start:`top ${mobileAndBigScreens?"85%":"70%"}`,
                    end:`bottom ${mobileAndBigScreens?"55%":"40%"}`,
                    scrub: 1,
                },opacity:0,duration:1})
            })
            Array.from(allSkillsNames).forEach((el)=>{
                tl.from(el,{scrollTrigger:{
                    trigger:el,
                    start:`top ${mobileAndBigScreens?"85%":"70%"}`,
                    end:`bottom ${mobileAndBigScreens?"55%":"40%"}`,
                    scrub: 1,
                },opacity:0,duration:1})
            })
            Array.from(allSkills).forEach((el)=>{
                tl.to(el,{scrollTrigger:{
                    trigger:el,
                    start:"top 60%",
                    end:"bottom 40%",
                    scrub: 1,
                },marginBottom:"0rem",duration:1})
            })
        },10)
    },[])
    return (
        <section className="skillsContainer" id="Skills" ref={e=>containerRef=e}>
            <h1>{language?"Current Stack":"Umiejętności"}</h1>
            <h2>Frontend:</h2>
            <ul>
                {document.body.clientWidth < 1200? skillsListFrontend.map(item=>{
                    return <li key={item.name}><img src={`/Images/${item.img}`} alt={`${item.name} icon`} /><span>{item.name}</span></li>
                }):skillsListFrontend.map((item,index)=>{
                    return <li key={item.name} style={{marginBottom:`${index < 5?1*index:(8-index)*1}rem`}}><img src={`/Images/${item.img}`} alt={`${item.name} icon`} /><span>{item.name}</span></li>})
                }
            </ul>
            <h2>Backend:</h2>
            <ul>
                {skillsListBackend.map((item)=>{
                return <li key={item.name} style={{marginBottom:"1rem"}}><img src={`/Images/${item.img}`} alt={`${item.name} icon`} /><span>{item.name}</span></li>})}
            </ul>
        </section>
    )
}
export default Skills
