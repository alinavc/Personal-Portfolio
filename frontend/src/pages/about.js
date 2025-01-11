import './about.css';
import '../App.css';

export const About = () => {
    return(
        <div>
            <section className='section-header'>About Me</section>
            <div className='aboutBox'>
                <div>I am currently studying Computer Science, and will graduate with a B.S in May 2026.
                    I have proficiency programming in <b>C++</b>, <b>Java</b>, <b>JavaScript</b>, <b>HTML/CSS</b>, and have practiced my skills
                    both solo and on an <b>agile scrum</b> team. I am currently looking to obtain work experience in the tech
                    field by <b>seeking internships</b>, and gaining knowledge through personal projects.
                </div>
                <br/>
                <div>
                    When I am not coding, I enjoy dancing ballet, traveling, and baking cookies and other goods. I currently
                    am interested in video game development and computer graphics, so I am also learning <b>Unreal Engine 5</b> in my free time.
                </div>
            </div>
        </div>);
}