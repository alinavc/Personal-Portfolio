import '../App.css';
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
            <ul></ul>
        </div>
    );
}