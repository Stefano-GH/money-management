/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Entrate.css";
import Regolari from "./regolari/Regolari";
import NonRegolari from "./non-regolari/NonRegolari";
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';
import { entrate as data } from "../../data/data";

const MENU_ICON = faCircleDot;
const EMPTY_ROWS = 5;
const TIPOLOGIE = ["regolare", "non regolare"];


/*--------------------------------------------------
  ENTRATE STRUCTURE
  --------------------------------------------------
*/

const Entrate = () => {
    const [show, setShow] = useState(false);
    const [regInputState, setRegInputState] = useState([]);
    const [nonRegInputState, setNonRegInputState] = useState([]);
    const [originalRegState, setOriginalRegState] = useState([]);
    const [originalNonRegState, setOriginalNonRegState] = useState([]);

    // inizializzo gli stati per gli elementi della tabella regolare
    useEffect(() => {
        const generatedRegState = new Array();
        const generatedNonRegState = new Array();

        // genero i valori per le entrate regolari e non
        var regRow = 1;
        var nonRegRow = 1;
        for (var i=0; i<data.length; i++) {
            if (data[i].tipologia === TIPOLOGIE[0]) {
                generatedRegState.push({
                    "row": regRow++,
                    "data": data[i].data,
                    "importo": data[i].importo,
                    "note": data[i].note,
                    "categoria": data[i].categoria
                });
            } else {
                generatedNonRegState.push({
                    "row": nonRegRow++,
                    "data": data[i].data,
                    "importo": data[i].importo,
                    "note": data[i].note,
                    "categoria": data[i].categoria
                });
            }
        }

        // genero i valori vuoti per le uscite ordinarie
        const regLength = generatedRegState.length;
        for (i=0; i<EMPTY_ROWS; i++) {
            generatedRegState.push({
                "row": i + regLength + 1,
                "data": "",
                "importo": "",
                "note": "",
                "categoria": ""
            });
        }

        // genero i valori vuoti per le uscite straordinarie
        const nonRegLength = generatedNonRegState.length;
        for (i=0; i<EMPTY_ROWS; i++) {
            generatedNonRegState.push({
                "row": i + nonRegLength + 1,
                "data": "",
                "importo": "",
                "note": "",
                "categoria": ""
            });
        }

        setRegInputState(generatedRegState);
        setNonRegInputState(generatedNonRegState);
        setOriginalRegState(generatedRegState);
        setOriginalNonRegState(generatedNonRegState);
    },[])

    // Gestisco lo stato "show"
    const handleShow = () => {
        setShow(!show);
    }

    // gestisco la variazione dei campi di input regolari
    const handleRegInputChange = (row, field, value) => {
        const updatedState = regInputState.map(item => {
            if (item.row === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setRegInputState(updatedState);
    };

    // gestisco la variazione dei campi di input non regolari
    const handleNonRegInputChange = (row, field, value) => {
        const updatedState = nonRegInputState.map(item => {
            if (item.row === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setNonRegInputState(updatedState);
    };

    // gestisco il pulsante di salvataggio
    const handleSave = async() => {
        alert("Bottone non ultimato per l'assenza di un db");
        // salvo le entrate regolari
        for (var i=0; i<regInputState.length; i++) {
            if (regInputState[i].data !== "" && regInputState[i].importo !== "" && regInputState[i].categoria !== "") {
                // save data in db
            }
        }
    }

    // gestisco il pulsante di annullamento
    const handleCancel = () => {
        setRegInputState(originalRegState);
        setNonRegInputState(originalNonRegState);
    }

    return <div className="main-wrapper">
        <div className="entrate-wrapper">
            <Regolari states={regInputState} tipologia={TIPOLOGIE[0]} handleOrdInputChange={handleRegInputChange} />
            <NonRegolari states={nonRegInputState} tipologia={TIPOLOGIE[1]} handleStrInputChange={handleNonRegInputChange} />
        </div>
        <div className="btn-wrapper">
            <FontAwesomeIcon icon={MENU_ICON} className="entrate-btns-opener" onClick={handleShow}/>
            <div className={show ? "entrate-save-btn" : "entrate-save-btn hidden"} onClick={handleSave}> &#10003; </div>
            <div className={show ? "entrate-cancel-btn" : "entrate-cancel-btn hidden"} onClick={handleCancel}> &#10007; </div>
        </div>
    </div>
}

export default Entrate;