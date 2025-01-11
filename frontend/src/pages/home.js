export const Home = () => {
    return(
        <div>
            <h1>Hello I'm <b>Alina Corpora</b>.</h1>
            <h2>I am a senior Computer Science student with current experience in web development, particularly using <b>MERN</b>.</h2>
            <div className='homeLinks'>
                <a href="#contact" className='buttonStyle'>Contact</a>
                <a href="test.txt" download className='buttonStyle'>My Resume</a>
                <a href="https://github.com/alinavc" target="_blank" rel='noreferrer' id='githubImg' className='buttonStyle'>git</a>
                <a href="https://www.linkedin.com/in/alina-corpora-10a3b1308/" target="_blank" rel='noreferrer'
                    id='linkedinImg' className='buttonStyle'>link</a>
            </div>
        </div>
    );
}