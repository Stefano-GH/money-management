import "./Uscite.css";
import Ordinarie from "./ordinarie/Ordinarie";
import Straordinarie from "./straordinarie/Straordinarie"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";


const Uscite = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return <div className="main-wrapper">
        <div className="uscite-wrapper">
            <Ordinarie />
            <Straordinarie />
        </div>
        <div className="btn-wrapper">
            <FontAwesomeIcon icon={faCircleDot} className="btns-opener" onClick={handleShow}/>
            <FontAwesomeIcon icon={faCheck} className={show ? "check-btn" : "check-btn hidden"} />
            <FontAwesomeIcon icon={faXmark} className={show ? "cancel-btn" : "cancel-btn hidden"} />
        </div>
    </div>
}

export default Uscite;