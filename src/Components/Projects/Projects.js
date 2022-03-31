import "./projects.scss"

import React,{useContext, useEffect,useRef} from 'react'
import ProjectCard from "./subcomponents/ProjectCard" 
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { LanguageContext } from "../../Context"

gsap.registerPlugin(ScrollTrigger)
function Projects() {
    const {language} = useContext(LanguageContext)
    const projectData = [{id:1,image:"/Images/social_media.jpg",link:"https://face-lite.netlify.app/",title:"Social Media Website",stack:["Html / Css / Javascript","Sass","React","React-hooks","Firebase"],reverse:
    {eng:"This website will finally let you to communicate with your friends,familly and the world, this is what Mark Zuckerberg probably said in 2004 while creating Facebook.I can say the same but all was created and designed by myself.You can add friends,customize your profile,messege added friends,add posts and comments to them,check other users profiles.All of this done using Firebase as a database for storing data.Also this project tought me how react and react hooks really works.",
    pl:"Strona dzięki której możesz być w ciągłym kontakcie z rodziną,znajomymi i całym światem, ot co Mark Zuckerberg prawdopodobnie powiedział przy tworzeniu Facebooka. Mógłym powiedzieć to samo lecz moja strona została stworzona i zaprojektowana całkowicie przeze mnie. Możesz na niej dodawać znajomych, pisać do nich,towrzyć i komentować posty lub sprawdzać profile innych osób.I to wszystko zaprogramowane z użyciem Firebase jako bazy danych.Projekt ten nauczył mnie jak działają react hooks"}},
    {id:2,image:"/Images/shop.jpg",title:"E-shop",link:"https://journey-empire.netlify.app/",stack:["Html / CSS / Javascrpit","Sass","React","React-redux","React-router","Gsap"],reverse:
    {eng:"First project designed with help of Figma.You can expolre astounding collection of 8 products.Each product commes with few color styles choice is in your hands.But the real functionalities are filtering products,adding them to cart,managing the cart.Cart is connected to local storage so you will never have to add the same items again after closing browser.This project let me to learn how react redux and react router works.All animations made with gsap.",
    pl:"Pierszy projekt zaprojektowany w Fimgmie.Na stronie możesz przeglądać przytłaczający zbiór 8 produktów.Każdy z nich w wielu kolorach, wybór należy do ciebie.Strona pozwala ci prosto filtrować produkty, dodawać je do koszyka i nim zarządzać.Koszyk jest połączony z local storage dzięki czemu po zamknięciu przeglądarki dodane produkty nadal w nim będą.Projekt ten nauczył mnie pracy z react readux i react router.Animacje wykonane z pomocą gsap."}},
    {id:3,image:"/Images/qc.jpg",title:"Chat App",link:"https://quickchat777.netlify.app/",stack:["Css / Scss","Javascript / Typescript","React / Redux-toolkit / Router","Node Js / Express","MongoDB","Jest / Cypress","Postman"],reverse:
    {eng:"Website let you chat with people live, create groups and manage your profile.This is my first big project with backend coded by myself.Thanks to it I learned working with Typescript,NodeJs,Express,MongoDB.It is also first project with unit,integration and end to end tests wrote with Jest/Cypress.",
    pl:"Strona pozwala na wymianę wiadomości w czasie rzeczywistym, tworzenie grup i zarządzanie swoim profile.Jest to pierwszy projek z backendem napisanym przeze mnie.Dzięki niemu nauczyłem się pracować z Typescript,NodeJs,Express, MongoDB.Jest to również pierwszy projekt z unit,integration and end to end testami napisanymi z pomocą Jest/Cypress."}},]

    let projectRef = useRef(null)
    useEffect(()=>{
        const cardsRef = projectRef.querySelectorAll(".projectCard")
        gsap.from(cardsRef[2],{scrollTrigger:{
            trigger:cardsRef[2],
            start:"top 60%"
        },opacity:0,pointerEvents:"none",duration:1.5})
        gsap.from(cardsRef[0],{scrollTrigger:{
            trigger:cardsRef[0],
            start:"top 60%"
        },right:"125%",pointerEvents:"none",duration:1.5})
        gsap.from(cardsRef[1],{scrollTrigger:{
            trigger:cardsRef[1],
            start:"top 60%"
        },left:"125%",pointerEvents:"none",duration:1.5})
    },[])
    return (
        <section className="projectContainer" id="Projects" ref={e=>projectRef=e}>
            <h2 className="title">{language?"Projects":"Projekty"}</h2>
            <div className="overflow">
                {projectData.map((item)=>{
                    return <ProjectCard key={item.id} projectData={item}/>
                })}
            </div>
            <a href="https://github.com/Lokostyk" target="_blank" className="moreLink">{language?"More":"Więcej"}</a>
        </section>
    )
}

export default Projects
