import './hero.css'
import { useState } from 'react'
import { useRef } from 'react'
import { TypeAnimation } from 'react-type-animation';
import { useInView } from 'react-intersection-observer';

    

const Hero = () => {
    const [navActive,setNavActive] = useState(false)
    const toggleMobileNav = () => {
       setNavActive((prev) => !prev)
    }
    const [ref, inView] = useInView();
    return(
        <section id="hero">
            {
                 navActive? (<div id='navMobile' onClick={toggleMobileNav} className={`animate__animated ${inView?'animate__fadeIn':''}`} ref={ref}>
                 <header>
                     <h1>fikayo</h1>
                     <img src='./close.png'/>
                 </header>
                 <ul id='navMobileList'>
                             <li className={`nmItems animate__animated ${inView?'animate__fadeInDown animate__delay-0.4s animate__slow':''}`} ref={ref}> <a href='#contact' >contact</a></li>   
                             <li className={`nmItems animate__animated ${inView?'animate__fadeInDown animate__delay-0.3s animate__slow':''}`} ref={ref}><a href='#about'>about</a></li>
                             <li className={`nmItems animate__animated ${inView?'animate__fadeInDown animate__delay-0.3s animate__slow':''}`} ref={ref}><a href='#skills'>skills</a></li> 
                             <li className={`nmItems animate__animated ${inView?'animate__fadeInDown animate__delay-0.1s animate__slow':''}`} ref={ref}><a href='#projects'>projects</a></li> 
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
                {/* <p id='pOther1'>hi, i am Fikayo. I am a fullstack developer </p> */}
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'hi i am fikayo.',
                        5000, // wait 1s before replacing "Mice" with "Hamsters"
                        'i am a fullstack developer',
                        10000
                    ]}
                    wrapper="p"
                    speed={20}
                    repeat={Infinity}
                    className='pOther1'
                    />
                <p id='pOther2'>
                    I am a full-stack developer with experience in building and deploying web applications.
                 I am passionate about creating beautiful and functional websites and mobile apps that help businesses grow online I am always looking
                 for new challenges and opportunities to learn and grow. I am confident that I have the skills and experience to help you achieve your business goals.
                 </p>

                 <div id='heroBtns'>
                    <button id="heroBtn1"><a href='#contact'>contact me</a></button>
                    <button id="heroBtn2"><a href='https://drive.google.com/file/d/1F_Q0cQneJ_glkomjIFW9JzqyBPjmmKVc/view?usp=sharing' >download CV</a></button>
                    
                 </div>
            </div>
            
        </section>
    )
}

export default Hero