import './siteLayout.css';
import {About} from './about.js';
import {Skills} from './skills.js';
import {Home} from './home.js';
import {Projects} from './projects.js';
import {Experience} from './experience.js';
import {Contact} from './contact.js';

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