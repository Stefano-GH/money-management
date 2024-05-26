/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Mensili.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import Spese from "./spese/Spese";
import Incassi from "./incassi/Incassi";

const PAGE_TITLE_SPESE = "Spese Mensili";
const PAGE_TITLE_INCASSI = "Incassi Mensili"
const SWITCH_ICON = faArrowsRotate;


/*--------------------------------------------------
  MENSILI STRUCTURE
  --------------------------------------------------
*/
const Mensili = () => {
    const [isSpese,setIsSpese] = useState(true);

    // switch uscite con entrate
    const handleSwitch = () => {
        setIsSpese(!isSpese);
    }

    return <div className="mensili-main-wrapper">
        <div className="mensili-switch-wrapper" onClick={handleSwitch}>
            <FontAwesomeIcon icon={SWITCH_ICON} />
            <p>{isSpese ? "Incassi" : "Spese"}</p>
        </div>

        <div className="mensili-title-wrapper">
            <h2>{isSpese ? PAGE_TITLE_SPESE : PAGE_TITLE_INCASSI}</h2>
        </div>

        {isSpese ? <Spese /> : <Incassi />}
    </div>
}

export default Mensili;