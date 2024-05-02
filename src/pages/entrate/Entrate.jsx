import "./Entrate.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

const Entrate = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    }

    return <div className="main-wrapper">
        <div className="entrate-wrapper">
            test
        </div>
        <div className="btn-wrapper">
            <div className="btns-opener" onClick={handleShow}>&#9776;</div>
            <FontAwesomeIcon icon={faCheck} className={show ? "check-btn" : "check-btn hidden"} />
            <FontAwesomeIcon icon={faXmark} className={show ? "cancel-btn" : "cancel-btn hidden"} />
        </div>
    </div>
}

export default Entrate;