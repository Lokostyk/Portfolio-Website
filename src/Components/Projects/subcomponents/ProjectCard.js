import React from 'react'

function ProjectCard(props) {
    const {image,title,stack} = props.projectData
    return (
            <div className={`projectCard ${title === "E-commerce"?title:""}`}>
                <img src={image}/>
                <h1>{title}</h1>
                <h3>Stack used:</h3>
                <ul>
                    {stack.map((item)=>{
                        return <li key={item}>{item}</li>
                    })}
                </ul>
                <button><img src="/Images/arrow2.svg"/>Check reverse<img src="/Images/arrow.svg"/></button>
            </div>
    )
}

export default ProjectCard
