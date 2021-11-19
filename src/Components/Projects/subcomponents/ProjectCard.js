import React,{useState} from 'react'

function ProjectCard(props) {
    const {image,title,stack,reverse} = props.projectData
    const [displayReverse,setDisplayReverse] = useState(false)
    return (
            <div className={`projectCard ${displayReverse?"revertCard":""}`}>
                <div className="front">
                    <img src={image}/>
                    <h1>{title}</h1>
                    <h3>Stack used:</h3>
                    <ul>
                        {stack.map((item)=>{
                            return <li key={item}>{item}</li>
                        })}
                    </ul>
                    <button onClick={()=>setDisplayReverse(!displayReverse)}><img src="/Images/arrow2.svg"/>Check reverse<img src="/Images/arrow.svg"/></button>
                </div>
                <div className="reverse">
                        <h1>Info</h1>
                        <p>{reverse}</p>
                    <button onClick={()=>setDisplayReverse(!displayReverse)}><img src="/Images/arrow2.svg"/>Check reverse<img src="/Images/arrow.svg"/></button>
                </div>
            </div>
    )
}

export default ProjectCard
