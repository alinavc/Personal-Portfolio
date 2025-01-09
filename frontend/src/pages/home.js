import './home.css';

export const Home = () =>{

    return(
        <div>
        <section id='home'>
            <h1>Hello I'm <b>Alina Corpora</b>.</h1>
            <h2>I am a senior Computer Science student with current experience in web development, particularly using <b>MERN</b>.</h2>
            <div className='homeLinks'>
                <a href="#contact" className='buttonStyle'>Contact</a>
                <a href="test.txt" download className='buttonStyle'>My Resume</a>
                <a href="https://github.com/alinavc" target="_blank" rel='noreferrer' id='githubImg' className='buttonStyle'>git</a>
                <a href="https://www.linkedin.com/in/alina-corpora-10a3b1308/" target="_blank" rel='noreferrer'
                    id='linkedinImg' className='buttonStyle'>link</a>
            </div>
        </section>
        <section id='about'></section>
            <h2>About Me</h2>
            <div>I am currently studying Computer Science, and will graduate with a B.S in May 2026.
                I have proficiency programming in C++, Java, JavaScript, HTML/CSS, and have practiced my skills
                 both solo and on an agile scrum team. I am currently looking to obtain work experience in the tech
                  field by seeking internships, and gaining knowledge through personal projects.
            </div>
            <div>
                When I am not coding, I enjoy dancing ballet, traveling, and baking cookies and other baked goods. I currently
                am interested in video game development and computer graphics, so I am also learning Unreal Engine 5 in my free time.
            </div>
        <section id='projects'>
            <h2>Projects</h2>
        </section>
        <section id='skills'>
            <h2>Skills</h2>
            <a className='buttonStyle'>C++</a>
            <a className='buttonStyle'>Java</a>
            <a className='buttonStyle'>JavaScript</a>
            <a className='buttonStyle'>HTML/CSS</a>
            <a className='buttonStyle'>Object Oriented Programming</a>
            <a className='buttonStyle'>MERN</a>
            <a className='buttonStyle'>MongoDB</a>
            <a className='buttonStyle'>Node.js</a>
            <a className='buttonStyle'>Agile</a>
            <a className='buttonStyle'>Scrum</a>
            <a className='buttonStyle'>Full Stack Web Development</a>
            <a className='buttonStyle'>Teamwork</a>
            <a className='buttonStyle'>Communication</a>
            <a className='buttonStyle'>Customer Service</a>
            <a className='buttonStyle'>Time Management</a>
            <a className='buttonStyle'>Problem Solving</a>
            <a className='buttonStyle'>Meeting Deadlines</a>
            <a className='buttonStyle'>Spanish</a>
            <a className='buttonStyle'>Leadership</a>
        </section>
        <section id= 'experience'>
            <h2>Experience</h2>
        </section>
        <section id='contact'>
            <h2>Contact</h2>
        </section>
        </div>);
};