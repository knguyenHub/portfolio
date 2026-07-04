import { Link } from 'react-router-dom';
import '../index.css'

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
            </nav>
        </div>
    );
};

export default NavBar;