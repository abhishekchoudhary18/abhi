import {useState } from "react";

export default function Contact() {


    const [formData,setFormData] = useState({});

    const handleChange = (e) =>{
        setFormData(ps=>{
            return {...ps ,[e.target.name]:e.target.value}
        })
    }

    const handleContact = (e) =>{
        e.preventDefault();
        console.log(formData)
        setFormData({})
    }

 
    return<>
    <h1>Contact.</h1>
    <p>Shoot me a email directly at <strong>abhishek.choudhary@gmail.com</strong> or get in touch </p>
    <form className="contactForm" onSubmit={handleContact}>
    <input name="name" onChange={handleChange} value={formData.name}/>
    <input name="email" onChange={handleChange} value={formData.email}/>
    <textarea name="message" rows={10} onChange={handleChange} value={formData.message}/>    
    <button type="submit">Send</button>
    </form>
    </>
}