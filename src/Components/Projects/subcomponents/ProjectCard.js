import React,{useContext, useState} from 'react'
import {LanguageContext} from "../../../Context"

function ProjectCard(props) {
    const {language} = useContext(LanguageContext)
    const {image,title,link,stack,reverse} = props.projectData
    const [displayReverse,setDisplayReverse] = useState(false)
    return (
            <div className={`projectCard ${displayReverse?"revertCard":""}`}>
                <div className="front">
                    <a href={link} target="_blank">
                        <img className="websiteImgPreview" src={image}/>
                        <img className="linkOutImg" src="/Images/linkout.png"/>
                    </a>
                    <h1>{title}</h1>
                    <h3>{language?"Stack used:":"Użyte technologie:"}</h3>
                    <ul>
                        {stack.map((item)=>{
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                    <button onClick={()=>setDisplayReverse(!displayReverse)}><img src="/Images/arrow2.svg"/>{language?"Check reverse":"Odwróć"}<img src="/Images/arrow.svg"/></button>
                </div>
                <div className="reverse">
                        <h1>{language?"About project":"O projekcie"}</h1>
                        <p>{language?reverse.eng:reverse.pl}</p>
                    <button onClick={()=>setDisplayReverse(!displayReverse)}><img src="/Images/arrow2.svg"/>{language?"Check reverse":"Odwróć"}<img src="/Images/arrow.svg"/></button>
                </div>
            </div>
    )
}

export default ProjectCard
