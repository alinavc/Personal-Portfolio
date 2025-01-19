import '../App.css';
import './experience.css';

export const Experience = () => {
    return(
        <div>
            <section className='section-header'>Experience</section>
            <div className='exp-timeline'>
                <hr className='exp-line' width='5px' size='1000'/>
                <div className='exp-events'>
                    <div id='tl1'>
                        <h3>American River College</h3>
                        <h4>Sacramento, CA</h4>
                        <p>I graduated with an <b>Associate's degree</b> in <b>Computer Science</b>,
                        <b>Physical Science/ Mathematics</b>, and <b>Social Sciences</b> in 2022.</p>
                        <a className='gradIcon'></a>
                        <p>2018 - 2022</p>
                    </div>
                    <div id='tl2'>
                        <h3>California State University, Sacramento</h3>
                        <h4>Sacramento, CA</h4>
                        <p>I will graduate with a <b>Bachelor's degree</b> in <b>Computer Science</b>, as well
                            as a <b>Certificate in Game Engineering</b> in <b>May 2026</b>.
                        </p>
                        <a className='gradIcon'></a>
                        <p>2023 - Present</p>
                    </div>
                    <div id='tl3'>
                        <h3>Full-Stack Developer</h3>
                        <h4>Sacramento, CA</h4>
                        <p>I am now working as a freelancer full-stack developer through Upwork. My main
                            stack includes MongoDB, Express, React, and Node.js. I especially enjoy coding in
                            C++ and Java.
                        </p>
                        <a className='jobIcon'></a>
                        <p>2025 - Present</p>
                    </div>
                </div>
            </div>
        </div>
    );
}