import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    const [show,setShow] = useState(false);

    const toggleMenu = () => {
        setShow(!show);
    }

    return <nav>
        <div className="nav-left-wrapper">
            <FontAwesomeIcon icon={faWallet} />
        </div>
        <div className={show ? "nav-right-wrapper show" : "nav-right-wrapper"}>
            <NavLink className="link" to="/">Home</NavLink>
            <NavLink className="link" to="/uscite">Uscite</NavLink>
            <NavLink className="link" to="/entrate">Entrate</NavLink>
        </div>
        <div className="burgerMenu" onClick={toggleMenu}>
            &#9776;
        </div>
    </nav>
}

export default Navbar;