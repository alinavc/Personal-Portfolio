import './siteLayout.css';
import {About} from './pages/about.js';
import {Skills} from './pages/skills.js';
import {Home} from './pages/home.js';
import {Projects} from './pages/projects.js';
import {Experience} from './pages/experience.js';
import {Contact} from './pages/contact.js';

export const Layout = () =>{

    return(
        <div>
        <section id='home'>
            <Home/>
        </section>
        <section id='about'></section>
            <About/>
        <section id='projects'>
            <Projects/>
        </section>
        <section id='skills'>
            <Skills/>
        </section>
        <section id= 'experience'>
            <Experience/>
        </section>
        <section id='contact'>
            <Contact/>
        </section>
        </div>);
};