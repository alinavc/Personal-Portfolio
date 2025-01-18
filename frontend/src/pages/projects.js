import '../App.css';
import './projects.css';
import {useEffect,useState} from 'react';
import axios from 'axios';

export const Projects = () => {

    const[projects, setProj] = useState([]);

    useEffect(() => {
        const fetchProj = async() =>{
            try{
                const response = await axios.get("http://localhost:4000/");
                setProj(response.data);
                console.log(response.data);
            } catch(err){
                console.log(err);
            }
        };

        fetchProj();
    },[]);

    return(
        <div>
            <section className='section-header'>Projects</section>
            <ul>
                {projects.map((proj) => {

                    let skillsArr = Object.values(proj.skills || {});
                    let skillsStr=skillsArr.join(', ');

                    return(
                        <li key={proj._id}>
                            <a className='projBox' href={proj.srcLink} target='_blank' rel='noreferrer'>
                                <div className='leftBox'>
                                    <h3 className='projTitle'>{proj.title}</h3>
                                    <span className='projSkills'>{skillsStr}</span>
                                    <p className='projDesc'>{proj.desc}</p>
                                </div>
                                <div className='rightBox'>
                                    <img className='projImg' src={proj.imgURL}></img>
                                </div>
                            </a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}