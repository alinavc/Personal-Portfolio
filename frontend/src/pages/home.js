import './home.css';

export const Home = () =>{

    return(
        <div>
        <section id='home'>
            <h1>Hello I'm <b>Alina Corpora</b>.</h1>
            <h2>I am a senior Computer Science student with current experience in web development, particularly using <b>MERN</b>.</h2>
            <div className='homeLinks'>
                <a href="#contact">Contact</a>
                <a href="test.txt" download>My Resume</a>
                <a href="https://github.com/alinavc" target="_blank" className='githubImg'>git</a>
                <a href="https://www.linkedin.com/in/alina-corpora-10a3b1308/" target="_blank" className='linkedinImg'>link</a>
            </div>
        </section>
        <section id='about'></section>
            <h2>About Me</h2>
            <div></div>
        <section id='projects'></section>
        <section id='skills'></section>
        <section id= 'experience'></section>
        <section id='contact'></section>
        </div>);
};