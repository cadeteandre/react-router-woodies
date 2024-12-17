import { Link, NavLink } from "react-router-dom";
import logoImg from "../../../public/images/site-logo.png";
import "./Header.css";

const Header = () => {
    return (  
        <header>
            <Link to={'/'} className="logo">
                <img src={logoImg} alt="logo-img" />
            </Link>
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'categories'}>Categories</NavLink>
            </nav>
        </header>
    );
}

export default Header;