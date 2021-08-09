import { Link } from 'react-router-dom';
import devLogo from 'assets/images/dev.svg';

const Navbar=()=>(
  <nav className="navbar">
    <Link to="/"><img className="logo-dev" src={devLogo} alt="Logo React"/></Link>
    <Link to="/about">About</Link>
  </nav>
);

export default Navbar;
