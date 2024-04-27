import './contact.css'
import { useState,useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [success,setSucess] = useState(false)
    const [notification,setNot] = useState('')
    const form = useRef();
    
    const clear = () => {
        setTimeout(()=>{
            setNot('')
        },5000)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_rmhtq3i', 'template_xbmg67d', form.current, '-s6cbcgwAZ_RR88P3')
        .then((result) => {
            console.log(result.text);
            setSucess(!success)
            setNot('email sent successfully')
            form.current.reset();
            clear()  

        }, (error) => {
            console.log(error.text);
            setSucess(false)
        });
    }
    return (
        <section id='contact'>
            <div id='contactBody'>
                <div id='contactBodyH'><h6>FikayO AdelE</h6></div>

                <div id='socialsC'>
                    <p>check out my socials for more updates</p>
                    <ul>
                    <li><a href='https://github.com/fikayo360'>github</a></li>
                        <li><a href='https://www.instagram.com/fikayoadele/?hl=en'>instagram</a></li>
                        <li><a href='https://www.linkedin.com/in/fikayo-adele/'>linkedin</a></li>
                    </ul>
                </div>
                <p>you can also send me an Email</p>
                <form ref={form} onSubmit={handleSubmit}>
                <input type="text" placeholder="name" />
                <textarea  typeof="text" placeholder="message" name="message" />
                <button>send</button>
                </form>
                <p id='not'> {notification} </p>

                <div id='cFoot'><h1>ciao</h1><img src='./love.png'/></div>
            </div>
        </section>
    )
}

export default Contact