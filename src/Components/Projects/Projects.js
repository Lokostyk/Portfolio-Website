import "./projects.scss"

import React from 'react'

function Projects() {
    return (
        <section className="projectContainer">
            <div className="projectCard">
                <img src="/Images/shop.jpg"/>
                <h1>E-commerce Website</h1>
                <h3>Stack used:</h3>
                <ul>
                    <li>React</li>
                    <li>React-redux</li>
                    <li>React-router</li>
                    <li>Sass</li>
                    <li>Gsap</li>
                </ul>
                <button><img src="/Images/arrow2.svg"/>Check reverse<img src="/Images/arrow.svg"/></button>
            </div>
        </section>
    )
}

export default Projects
