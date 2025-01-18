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
                        <p></p>
                        <a className='gradIcon'></a>
                        <p>2018-2023</p>
                    </div>
                    <div id='tl2'>
                        <a className='gradIcon'></a>
                    </div>
                    <div id='tl3'>
                        <a className='jobIcon'></a>
                    </div>
                </div>
            </div>
        </div>
    );
}