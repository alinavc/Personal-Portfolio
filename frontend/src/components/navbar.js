import {Link} from 'react-router-dom';

export const Navbar = () =>{
    return (<div className="navbar">
        <Link to='/'>Home</Link>
        <Link to='/'>About</Link>
        <Link to = '/'>Projects</Link>
        <Link to= '/'>Skills</Link>
        <Link to ='/'>Experience</Link>
        <Link to='/'>Contact</Link>
    </div>)
}