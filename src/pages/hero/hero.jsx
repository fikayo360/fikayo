import './hero.css'
import { useState } from 'react'
import { useRef } from 'react'

const Hero = () => {
    const [navActive,setNavActive] = useState(false)
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }
    return(
        <section id="hero">
            {
                 navActive? (<div id='navMobile' onClick={toggleMobileNav}>
                 <header>
                     <h1>fikayo</h1>
                     <img src='./close.png'/>
                 </header>
                 <ul id='navMobileList'>
                             <li className='nmItems'><a href='#contact' >contact</a></li>   
                             <li className='nmItems'><a href='#about'>about</a></li>
                             <li className='nmItems'><a href='#skills'>skills</a></li> 
                             <li className='nmItems'><a href='#projects'>projects</a></li> 
                 </ul>
             </div>):null
            }
            <nav id="heroNav">
                <div id='navWrap'>
                    <div id='navWrapH'><h1>FIKAYO</h1><i></i></div>
                    <ul>
                    <li><a href='#hero'>home</a></li>
                    <li><a href='#about'>about</a></li>
                    <li><a href='#projects'>projects</a></li>
                    <li><a href='skills'>skills</a></li>
                    </ul>
                    <img src='./hamburger.png' onClick={toggleMobileNav}/>
                </div>
            </nav>
            <div >

            </div>
            <div id="heroOther"> 
                <img src='./hero1.png'/>
                <p id='pOther1'>hi, i am Fikayo. I am a fullstack developer </p>
                <p id='pOther2'>
                    I am a full-stack developer with experience in building and deploying web applications.
                 I am passionate about creating beautiful and functional websites and mobile apps that help businesses grow online I am always looking
                 for new challenges and opportunities to learn and grow. I am confident that I have the skills and experience to help you achieve your business goals.
                 </p>

                 <div id='heroBtns'>
                    <button id="heroBtn1"><a href='#contact'>contact me</a></button>
                    <button id="heroBtn2"><a href='https://drive.google.com/file/d/17aOo_0MAP455SuQBnIZKhy7QPkMa4D4u/view?usp=drive_link' >download CV</a></button>
                    
                 </div>
            </div>
            
        </section>
    )
}

export default Hero