import "./skills.scss"

import React,{useEffect,useRef} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function Skills() {
    const skillsList = [{img:"figma.svg",name:"Figma"},{img:"github.svg",name:"GitHub/Git"},{img:"html.svg",name:"HTML"}
    ,{img:"css.svg",name:"CSS"},{img:"sass.svg",name:"Sass"},{img:"javascript.svg",name:"Javascript(ES6)"},{img:"react.svg",name:"React"}
    ,{img:"redux.svg",name:"React-redux"},{img:"router.png",name:"React-router"},{img:"firebase.svg",name:"Firebase"},{img:"gsap.svg",name:"Gsap"}]
    let containerRef = useRef(null)
    useEffect(()=>{
        const allSkills = containerRef.getElementsByTagName("li")
        const allSkillsImages = containerRef.getElementsByTagName("img")
        const allSkillsNames = containerRef.getElementsByTagName("span")
        const tl = gsap.timeline({duration:1})
        setTimeout(()=>{
            Array.from(allSkillsImages).forEach((el)=>{
                tl.from(el,{scrollTrigger:{
                    trigger:el,
                    start:"top 70%",
                    end:"bottom 40%",
                    scrub: 1,
                },opacity:0,duration:1})
            })
            Array.from(allSkillsNames).forEach((el)=>{
                tl.from(el,{scrollTrigger:{
                    trigger:el,
                    start:"top 70%",
                    end:"bottom 40%",
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
        <section className="skillsContainer" ref={e=>containerRef=e}>
            <ul>
                {skillsList.map((item,index)=>{
                    return <li key={item.name} style={{marginBottom:`${index<5?1*index:(10-index)*1}rem`}}><img src={`/Images/${item.img}`} alt={`${item.name} icon`} /><span>{item.name}</span></li>
                })}
            </ul>
        </section>
    )
}
export default Skills
