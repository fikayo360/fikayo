import './projects.css'
import { useInView } from 'react-intersection-observer';

const Projects = ( ) => {
    const [ref, inView] = useInView();
    return(
        <section id='projects'>
            <h1 id='ph1' className={`animate__animated ${inView?'animate__fadeInUp':''}`} ref={ref}>My projects</h1>
            <div className='pSections'>
               <h2>server side projects</h2> 
               <div className='projects'>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='projectFoot'><h1 className='projectName'>chirpApi</h1> <a href='https://github.com/fikayo360/chirpBackend'>github</a></div>
                </div>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600' />
                    <div className='projectFoot'><h1 className='projectName'>Vidme api</h1><a href='https://github.com/fikayo360/vidmeBackend'>github</a></div>
                </div>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='projectFoot'><h1 className='projectName'>fintech api</h1><a href='https://github.com/fikayo360/fintechAppServer'>github</a></div>
                </div>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='projectFoot'><h1 className='projectName'>ecommerce api </h1><a>github</a></div>
                </div>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='projectFoot'><h1 className='projectName'>foodapp api</h1><a href='https://github.com/fikayo360/foodbaeServer'>github</a></div>
                </div>
                <div className='project'>
                    <img src='https://images.pexels.com/photos/6466141/pexels-photo-6466141.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                    <div className='projectFoot'><h1 className='projectName'>scrapper bot</h1><a href='https://github.com/fikayo360/skrapper'>github</a></div>
                </div>
               </div>
            </div>

            <div className='pSections'>
               <h2>frontend</h2> 
               <div className='projects'>
                <div className='project'>
                    <img src='./zoka.png'/>
                    <div className='projectFoot'><h1 className='projectName'>Zoka photography</h1><a href='http://zokaphotography.netlify.app/'>visit</a></div>
                </div>
                <div className='project'>
                    <img src='rychard.jpg'/>
                    <div className='projectFoot'><h1 className='projectName'>ryan photography </h1><a href='https://beautypluz.netlify.app/'>visit</a></div>
                </div>
                <div className='project'>
                    <img src='photono.png' />
                    <div className='projectFoot'><h1 className='projectName'>photono </h1><a href='http://photono.netlify.app/'>visit</a></div>
                </div>
                <div className='project'>
                    <img src='stephen.png'/>
                    <div className='projectFoot'><h1 className='projectName'>stephen conrad</h1><a href='https://stephen-conrad-photo.netlify.app/'>visit</a></div>
                </div>
               </div>
            </div>

            
            <div className='pSections'>
               <h2>mobile</h2> 
               <div className='projects'>
               <div className='mobile'>
                    <img src='./chirp1.jpg'/>
                    <div className='mobileFoot'><h1 className='projectName'>chirp</h1><a href='https://github.com/fikayo360/chirp'>github</a></div>
                </div>
                <div className='mobile'>
                    <img src='./foodbae1.jpg'/>
                    <div className='mobileFoot'><h1 className='projectName'>foodbae</h1><a href='https://github.com/fikayo360/foodBaeNative'>github</a></div>
                </div>
                <div className='mobile'>
                    <img src='vidme1.jpg'/>
                    <div className='mobileFoot'><h1 className='projectName'>vidme</h1><a href='https://github.com/fikayo360/vidmenative'>github</a></div>
                </div>
               </div>
            </div>
        </section>
    )
}

export default Projects