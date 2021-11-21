import "./contact.scss"

import React,{useState} from 'react'

function Contact() {
    const [formData,setFormData] = useState({email:"",name:"",title:"",content:""})
    return (
        <section className="contactContainer" action="https://formsubmit.co/lokostyk12@gmail.com" method="POST">
            <h1>Let's talk.But you first.</h1>
            <form onSubmit={e=>e.preventDefault()}>
                <input type="email" name="email" value={formData.email} placeholder="E-mail"
                     onChange={e=>setFormData({...formData,email:e.target.value})} required />
                <input type="text" name="name" value={formData.name} placeholder="Name"
                     onChange={e=>setFormData({...formData,name:e.target.value})} required />
                <input type="text" value={formData.title} placeholder="Title"
                     onChange={e=>setFormData({...formData,title:e.target.value})} required />
                <textarea name="message" value={formData.content} placeholder="Content"
                    onChange={e=>setFormData({...formData,content:e.target.value})} required/>
                <input type="submit" className="submitBtn"/>
            </form>
        </section>
    )
}

export default Contact
