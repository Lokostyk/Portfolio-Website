import "./projects.scss"

import React from 'react'
import ProjectCard from "./subcomponents/ProjectCard" 

function Projects() {
    const projectData = [{id:1,image:"/Images/social_media.jpg",title:"Social Media Website",stack:["React","React-hooks","Sass","Firebase"],reverse:""},
                        {id:3,image:"/Images/weather.jpg",title:"Weather Forecast",stack:["Html","Css","Javascript","Chart.js","Leaflet.js"],reverse:""},
                        {id:2,image:"/Images/shop.jpg",title:"E-commerce",stack:["React","React-redux","React-router","Sass","Gsap"],reverse:""}]
    return (
        <section className="projectContainer">
                {projectData.map((item)=>{
                    return <ProjectCard key={item.id} projectData={item}/>
                })}
        </section>
    )
}

export default Projects
