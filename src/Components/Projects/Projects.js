import "./projects.scss"

import React,{useEffect,useRef} from 'react'
import ProjectCard from "./subcomponents/ProjectCard" 
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function Projects() {
    const projectData = [{id:1,image:"/Images/social_media.jpg",title:"Social Media Website",stack:["React","React-hooks","Sass","Firebase"],reverse:"This website will finally let you to communicate with your friends,familly and world, this is what Mark Zuckerberg probably said in 2004 while creating Facebook.I can say the same but all was created and designed by myself.You can add friends,customize your profile,messege added friends,add posts and comments to them,check other users profiles.All of this done using Firebase as a database for storing data.Also this project tought me how react and react hooks really works."},
    {id:3,image:"/Images/weather.jpg",title:"Weather Forecast",stack:["Html","Css","Javascript","Chart.js","Leaflet.js"],reverse:"On this website you can check current weather from 20 polish cities displayed on map.Also for the same cities you can check weather for next 5 days displayed on graphs.While creating i used weather API for data fetching.To display data on map i used Leaflet.js.For graphs usefull was Chart.js."},
    {id:2,image:"/Images/shop.jpg",title:"E-commerce",stack:["React","React-redux","React-router","Sass","Gsap"],reverse:"First project designed with help of Figma.You can expolre astounding collection of 8 products.Each product commes with few color styles choice is in your hands.But the real functionalities are filtering products,adding them to cart,managing the cart.Cart is connected to local storage so you will never have to add the same items again after closing browser.This project let me to learn how react redux and react router works.All animations made with gsap."}]

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
        <section className="projectContainer" ref={e=>projectRef=e}>
            <div className="overflow">
                {projectData.map((item)=>{
                    return <ProjectCard key={item.id} projectData={item}/>
                })}
            </div>
        </section>
    )
}

export default Projects
