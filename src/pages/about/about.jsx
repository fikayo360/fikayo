import './about.css'
import { useInView } from 'react-intersection-observer';

const About = () => {

    return(
        <section id='about' >
            <div id='aboutWrap'>
                <div id='aboutLeft'>
                    <h2 >About </h2>
                    <p >
                    my name is fikayo and I'm a developer with 3 years of experience wrangling code into beautiful, functional applications. 
                    My tech stack is a potent blend of React, Node.js, databases, and React Native – basically but i am mainly backend focused, 
                    My passion extends beyond the lines of code. I'm constantly on the lookout for new technologies and best practices, actively learning and keeping my skillset sharp. 
                    Effective communication and collaboration are also key to my approach. I thrive in team environments, 
                    working hand-in-hand with designers and stakeholders to deliver projects that not only meet technical requirements but also exceed user expectations.

                    Let's face it, the web development landscape is a fast-moving beast. But that's exactly what excites me!
                    I'm always looking for new challenges and opportunities to push my boundaries. So, whether you're looking for a skilled developer to tackle
                    your next project or simply someone passionate about the future of web development, I'd love to connect.
                    </p>
                </div>

                <div id='aboutRight'>
                    <img src='./monkey.png' />
                </div>

            </div>
        </section>
    )
}

export default About