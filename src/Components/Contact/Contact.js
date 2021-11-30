import "./contact.scss"

import React,{useState,useEffect,useRef} from 'react'
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)
function Contact() {
    let containerRef = useRef(null)
    const [formData,setFormData] = useState({email:"",name:"",title:"",content:""})
    const [error,setError] = useState()
    
    useEffect(()=>{
        setTimeout(()=>{
            Array.from(containerRef.getElementsByTagName("input")).forEach((item,index)=>{
                if(index === containerRef.getElementsByTagName("input").length-1) return
                gsap.from(item,{scrollTrigger:{
                    trigger:item,
                    start:"top 80%"
                },clipPath: "polygon(100% 99%, 100% 100%, 0 100%, 0 99%)",duration:1})
            })
            gsap.from(containerRef.getElementsByTagName("textarea"),{scrollTrigger:{
                trigger:containerRef.getElementsByTagName("textarea"),
                start:"top 80%"
            },clipPath:"polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)",duration:1})
        },100)
    },[])
    return (
        <section className="contactContainer" id="Contact" ref={e=>containerRef=e}>
            <h1>Let's talk.But you first.</h1>
            <form action="https://formsubmit.co/82b169f28868994680a6e351d0662643" method="POST" >
                <input type="email" name="email" value={formData.email} placeholder="E-mail"
                     onChange={e=>setFormData({...formData,email:e.target.value})} required />
                <input type="text" name="name" value={formData.title} placeholder="Title"
                     onChange={e=>setFormData({...formData,title:e.target.value})} required />
                <textarea name="message" value={formData.content} placeholder="Content" rows="7"
                    onChange={e=>setFormData({...formData,content:e.target.value})} required/>
                <input type="submit" className="submitBtn" value="Send"/>
            </form>
            <p>OR</p>
            <div className="otherContacts">
                <a href="https://www.facebook.com/marcin.ziemba.79/" target="_blank"><img src="/Images/fb.svg" /></a>
                <a href="https://www.linkedin.com/in/marcin-ziemba-8a6171217/" target="_blank"><img src="/Images/linkedin.svg"/></a>
            </div>
        </section>
    )
}

export default Contact
