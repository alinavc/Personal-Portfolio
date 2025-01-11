import './navbar.css';
import '../pages/siteLayout.js';

import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return (<div className="nav-placement">
        <div className='nav-bg'>
            <Link to='#home' className='nav-link'>Home</Link>
            <Link to='#about' className='nav-link'>About</Link>
            <Link to = '#projects' className='nav-link'>Projects</Link>
            <Link to= '#skills' className='nav-link'>Skills</Link>
            <Link to ='#experience' className='nav-link'>Experience</Link>
            <Link to='#contact' className='nav-link'>Contact</Link>
        </div>
    </div>)
}