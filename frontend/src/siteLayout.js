import './siteLayout.css';
import {About} from './pages/about.js';
import {Skills} from './pages/skills.js';
import {Home} from './pages/home.js';
import {Projects} from './pages/projects.js';
import {Experience} from './pages/experience.js';
import {Contact} from './pages/contact.js';
import {ARR} from './pages/arr.js';
import moonLogo from './assets/icons/siteMode/moon.png';
import sunLogo from './assets/icons/siteMode/sun.png';

export const Layout = () =>{
    var modeIcon = moonLogo;
    let getTheme=JSON.parse(localStorage.getItem('appMode'));
    if(getTheme==="DARK"){
        document.body.classList='darkMode';
        modeIcon=sunLogo;
    }

    return(
        <div>
        <section id='navHolder'></section>
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
        <img src={modeIcon} id='modeSwitch' style={{width:'50px',height:'50px'}} title='Dark Mode' onClick={checkMode}></img>
        <section>
            <ARR/>
        </section>
        </div>);
};

const checkMode=()=>{
    var mode;
    var icon=document.getElementById('modeSwitch');
    document.body.classList.toggle('darkMode');
    if(document.body.classList.contains('darkMode')){
        icon.src=sunLogo;
        icon.title="Light Mode";
        mode='DARK';
    } else{
        icon.src=moonLogo;
        icon.title='Dark Mode';
        mode='LIGHT'
    }
    localStorage.setItem('appMode',JSON.stringify(mode));
}