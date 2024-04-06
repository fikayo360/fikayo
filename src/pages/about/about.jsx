import './about.css'

const About = () => {
    return(
        <section id='about'>
            <div id='aboutWrap'>
                <div id='aboutLeft'>
                    <h2>About fikayo</h2>
                    <p>
                    By day (and sometimes night, fueled by questionable amounts of caffeine), 
                    I'm a developer with 3 years of experience wrangling code into beautiful, functional applications. 
                    My weapon of choice? A potent blend of React, Node.js, databases, and React Native – basically, 
                    I can build things for the web and your phone.

                    When I'm not battling compiler errors or deciphering cryptic database messages, you can find me:

                    Googlin' like a champ for the most obscure coding solutions (because hey, even Stack Overflow has its limits),
                    Fueling my caffeine addiction with enough coffee to power a small village,
                    Explaining to my family why staring at a screen for hours on end is actually "work" (it's a struggle, trust me),
                    But in all seriousness, I'm passionate about building things that make a difference.
                    Whether it's a sleek web app or a handy mobile tool, I love the challenge of taking an idea and turning it into reality. 
                    So, if you're looking for a developer who's equal parts skilled and slightly sleep-deprived (it's a badge of honor!), then hit me up!
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