import './home.css';
import '../App.css';
import alinaImg from "../assets/icons/alina.jpg";
import myResume from '../assets/files/resume.pdf';

export const Home = () => {
    return(
        <div className='homeBox'>
            <div className="homeTxt">
                <h2>Hello! I'm</h2>
                <h1>Alina Corpora</h1>
                <h2>I am a senior Computer Science student with current experience in web development, particularly using <b>MERN</b>.</h2>
                <div className='homeLinks'>
                    <a href="#contact" className='home-button' id='nonIconButton'>Contact</a>
                    <a href={myResume} download='AlinaCorpora_Resume.pdf' className='home-button' id='nonIconButton'>My Resume</a>
                    <a href="https://github.com/alinavc" target="_blank" rel='noreferrer' id='githubImg'
                      className='home-button' title="To GitHub">GitHub</a>
                    <a href="https://www.linkedin.com/in/alina-corpora-10a3b1308/" target="_blank" rel='noreferrer' title="To LinkedIn"
                        id='linkedinImg' className='home-button'>LinkedIn</a>
                </div>
            </div>
            <div className='homeImg'>
                <img src={alinaImg} alt='Alina'/>
            </div>
        </div>
    );
}