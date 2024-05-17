/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Uscite.css";
import Ordinarie from "./ordinarie/Ordinarie";
import Straordinarie from "./straordinarie/Straordinarie"
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from "@fortawesome/free-solid-svg-icons";
import { data } from "../../data/data";

const MENU_ICON = faCircleDot;
const EMPTY_ROWS = 5;
const TIPOLOGIE = ["ordinaria", "straordinaria"];


/*--------------------------------------------------
  USCITE STRUCTURE
  --------------------------------------------------
*/
const Uscite = () => {
    const [show, setShow] = useState(false);
    const [ordInputState, setOrdInputState] = useState([]);
    const [strInputState, setStrInputState] = useState([]);
    const [originalOrdState, setOriginalOrdState] = useState([]);
    const [originalStrState, setOriginalStrState] = useState([]);

    // inizializzo gli stati per gli elementi della tabella ordinaria
    useEffect(() => {
        const generatedOrdState = new Array();
        const generatedStrState = new Array();

        // genero i valori per le uscite ordinarie e straordianrie
        var ordRow = 1;
        var strRow = 1;
        for (var i=0; i<data.length; i++) {
            if (data[i].tipologia === TIPOLOGIE[0]) {
                generatedOrdState.push({
                    "row": ordRow++,
                    "data": data[i].data,
                    "importo": data[i].importo,
                    "note": data[i].note,
                    "categoria": data[i].categoria
                });
            } else {
                generatedStrState.push({
                    "row": strRow++,
                    "data": data[i].data,
                    "importo": data[i].importo,
                    "note": data[i].note,
                    "categoria": data[i].categoria
                });
            }
        }

        // genero i valori vuoti per le uscite ordinarie
        const ordLength = generatedOrdState.length;
        for (i=0; i<EMPTY_ROWS; i++) {
            generatedOrdState.push({
                "row": i + ordLength + 1,
                "data": "",
                "importo": "",
                "note": "",
                "categoria": ""
            });
        }

        // genero i valori vuoti per le uscite straordinarie
        const strLength = generatedStrState.length;
        for (i=0; i<EMPTY_ROWS; i++) {
            generatedStrState.push({
                "row": i + strLength + 1,
                "data": "",
                "importo": "",
                "note": "",
                "categoria": ""
            });
        }

        setOrdInputState(generatedOrdState);
        setStrInputState(generatedStrState);
        setOriginalOrdState(generatedOrdState);
        setOriginalStrState(generatedStrState);
    },[])

    // Gestisco lo stato "show"
    const handleShow = () => {
        setShow(!show);
    }

    // gestisco la variazione dei campi di input ordinari
    const handleOrdInputChange = (row, field, value) => {
        const updatedState = ordInputState.map(item => {
            if (item.row === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setOrdInputState(updatedState);
        console.log(ordInputState);
    };

    // gestisco la variazione dei campi di input straordianri
    const handleStrInputChange = (row, field, value) => {
        const updatedState = strInputState.map(item => {
            if (item.row === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setStrInputState(updatedState);
    };

    // gestisco il pulsante di salvataggio
    const handleSave = async() => {
        alert("Bottone non ultimato per l'assenza di un db");
        for (var i=0; i<ordInputState.length; i++) {
            if (ordInputState[i].data !== "" && ordInputState[i].importo !== "" && ordInputState[i].categoria !== "") {
                // save data in db
            }
        }
    }

    // gestisco il pulsante di annullamento
    const handleCancel = () => {
        setOrdInputState(originalOrdState);
        setStrInputState(originalStrState);
    }

    return <div className="main-wrapper">
        <div className="uscite-wrapper">
            <Ordinarie states={ordInputState} tipologia={TIPOLOGIE[0]} handleOrdInputChange={handleOrdInputChange} />
            <Straordinarie states={strInputState} tipologia={TIPOLOGIE[1]} handleStrInputChange={handleStrInputChange} />
        </div>
        <div className="btn-wrapper">
            <FontAwesomeIcon icon={MENU_ICON} className="uscite-btns-opener" onClick={handleShow}/>
            <div className={show ? "uscite-save-btn" : "uscite-save-btn hidden"} onClick={handleSave}> &#10003; </div>
            <div className={show ? "uscite-cancel-btn" : "uscite-cancel-btn hidden"} onClick={handleCancel}> &#10007; </div>
        </div>
    </div>
}

export default Uscite;