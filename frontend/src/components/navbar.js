import './navbar.css';
import '../siteLayout.js';

import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return (<div className="nav-placement">
        <div className='nav-bg'>
            <a href='#home' className='nav-link'>Home</a>
            <a href='#about' className='nav-link'>About</a>
            <a href ='#projects' className='nav-link'>Projects</a>
            <a href='#skills' className='nav-link'>Skills</a>
            <a href ='#experience' className='nav-link'>Experience</a>
            <a href='#contact' className='nav-link'>Contact</a>
        </div>
    </div>)
}