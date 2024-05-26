/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./ListMonthItem.css";
import { useState,useEffect,useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";

const INFO_ICON = faCircleInfo;


/*--------------------------------------------------
  LIST MONTH ITEM STRUCTURE
  --------------------------------------------------
*/
const ListMonthItem = ( {data,campi,style,handleInputChange} ) => {
    const [tot, setTot] = useState(0);
    const navigate = useNavigate();
    
    useEffect(() => {
        // calcolo il totale mensile con useEffect
        const calcolaTot = () => {
            const sum = campi.slice(3, -1).reduce((acc,campo) => {
                const value = parseFloat(data[campo]);
                return acc + (isNaN(value) ? 0 : value);
            }, 0);
            setTot(sum.toFixed(2));
        };
        calcolaTot();

    },[data])

    // gestisco l'inserimento di dati negli input
    const handleChange = useCallback((field, value) => {
        handleInputChange(data.id, field, value);
    }, [handleInputChange, data.id]);

    // genero dinamicamente le label con i dati
    const labelList = campi.slice(1, 3).map((campo) => (
        <label key={`${campo}-${data.id}`} htmlFor={campo} style={style}>
            {data[campo]}
        </label>
    ));

    // genero dinamicamente gli input con i dati
    const inputList = campi.slice(3, -1).map((campo) => (
        <input 
            key={`${campo}-${data.id}`}
            value={data[campo]}
            style={style}
            onChange={e => handleChange(campo, e.target.value)}
        />
    ));
    
    return <div className="list-month-item-wrapper">
        {labelList}
        {inputList}
        <label key={`totale-${data.id}`} htmlFor={campi[campi.length-1]} style={style}>
            {tot}
        </label>
        <div>
            <FontAwesomeIcon icon={INFO_ICON} className="info-hidden" onClick={() => navigate(`/mensili/${data.id}`, {state: data})} />
        </div>
    </div>;
};

export default ListMonthItem;