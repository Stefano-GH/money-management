/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWallet } from '@fortawesome/free-solid-svg-icons'

const NAV_TITLE_1 = "Uscite";
const NAV_TITLE_2 = "Entrate";
const NAV_TITLE_3 = "Mensili";


/*--------------------------------------------------
  NAVBAR STRUCTURE
  --------------------------------------------------
*/
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
            <NavLink className="link" to="/uscite">{NAV_TITLE_1}</NavLink>
            <NavLink className="link" to="/entrate">{NAV_TITLE_2}</NavLink>
            <NavLink className="link" to="/mensili">{NAV_TITLE_3}</NavLink>
        </div>
        <div className="burgerMenu" onClick={toggleMenu}>
            &#9776;
        </div>
    </nav>
}

export default Navbar;