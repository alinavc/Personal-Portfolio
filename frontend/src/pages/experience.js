import '../App.css';
import './experience.css';

export const Experience = () => {
    return(
        <div>
            <section className='section-header'>Experience</section>
            <section className='exp-placeholder'></section>
            <div className='exp-timeline'>
                <hr className='exp-line' width='5px' size='1000'/>
                <div className='exp-events'>
                    <div id='tl1'>
                        <div className='exp-leftBox'>
                            <h3 className='tlTitle'>American River College</h3>
                            <h4 className='tlLocation'>Sacramento, CA</h4>
                            <p className='tlDesc'>I graduated with an <b>Associate's degree</b> in <b>Computer Science</b>,
                            <b>Physical Science/ Mathematics</b>, and <b>Social Sciences</b> in 2022.</p>
                        </div>
                        <div className='exp-midBox'>
                            <a className='gradIcon'></a>
                        </div>
                        <div className='exp-rightBox'>
                            <p className='tlYear'>2018 - 2022</p>
                        </div>
                    </div>
                    <div id='tl2'>
                        <div className='exp-leftBox'>
                            <h3 className='tlTitle'>California State University, Sacramento</h3>
                            <h4 className='tlLocation'>Sacramento, CA</h4>
                            <p className='tlDesc'>I will graduate with a <b>Bachelor's degree</b> in <b>Computer Science</b>, as well
                                as a <b>Certificate in Game Engineering</b> in <b>May 2026</b>.
                            </p>
                        </div>
                        <div className='exp-midBox'>
                            <a className='gradIcon'></a>
                        </div>
                        <div className='exp-rightBox'>
                            <p className='tlYear'>2023 - Present</p>
                        </div>
                    </div>
                    <div id='tl3'>
                        <div className='exp-leftBox'>
                            <h3 className='tlTitle'>Full-Stack Developer</h3>
                            <h4 className='tlLocation'>Sacramento, CA</h4>
                            <p className='tlDesc'>I am now working as a <b>freelancer</b> full-stack 
                                developer through<a href='https://www.upwork.com/freelancers/~015b2cf3a73562967f?mp_source=share' target='_blank' rel='noreferrer'>Upwork</a>
                                . My main stack includes MongoDB, Express, React, and Node.js. I especially enjoy coding in
                                <b> C++</b> and <b>Java</b>.
                            </p>
                        </div>
                        <div className='exp-midBox'>
                            <a className='jobIcon'></a>
                        </div>
                        <div className='exp-rightBox'>
                            <p className='tlYear'>2025 - Present</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}