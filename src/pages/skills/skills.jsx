import './skills.css'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from 'react';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
   
const Skills = () => {
    gsap.registerPlugin(useGSAP);
    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.from('.skill',{
            scrollTrigger: '#skills', 
            duration: 0.3,
            y: '-20%',
            stagger: 0.1, 
            ease: 'power3.inOut',
         })
    },[])

    return (
        <section id='skills'>
            <h1 id='skillsId'>My skills</h1>
            <div id='skillContent'>
                <div className='skill' id='col1'>
                    <h1>html</h1>
                </div>
                <div className='skill' id='col2'>
                    <h1>css</h1>
                </div>
                <div className='skill' id='col3'>
                    <h1>javascript</h1>
                </div>
                <div className='skill' id='col2'>
                    <h1>react</h1>
                </div>
                <div className='skill' id='col3'>
                    <h1>react-native</h1>
                </div>
                <div className='skill' id='col1'>
                    <h1>node(express,nest)</h1>
                </div>
                <div className='skill' id='col4'>
                    <h1>sql(postgres)</h1>
                </div>
                <div className='skill' id='col1'>
                    <h1>mongoDB</h1>
                </div>
                <div className='skill' id='col4'>
                    <h1>docker</h1>
                </div>
                <div className='skill' id='col2' >
                    <h1> code testing</h1>
                </div>
                <div className='skill' id='col2' >
                    <h1>ci/cd</h1>
                </div>
                <div className='skill' id='col2' >
                    <h1>testing</h1>
                </div>
                <div className='skill' id='col2' >
                    <h1>cloud hosting</h1>
                </div>
                <div className='skill' id='col5'>
                    <h1>and so on ......</h1>
                </div>
            </div>
        </section>
    )
}

export default Skills