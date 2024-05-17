/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./ListMonthItem.css";
import { useState,useEffect,useCallback } from "react";


/*--------------------------------------------------
  LIST MONTH ITEM STRUCTURE
  --------------------------------------------------
*/
const ListMonthItem = ( {data,campi,width,handleInputChange} ) => {
    const [tot, setTot] = useState(0);

    

    // calcolo il totale mensile con useEffect
    useEffect(() => {
        const calcolaTot = () => {
            const sum = campi.slice(3, -1).reduce((acc,campo) => {
                const value =parseFloat(data[campo]);
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
        <label key={`${campo}-${data.id}`} htmlFor={campo} style={{width:width}}>
            {data[campo]}
        </label>
    ));

    // genero dinamicamente gli input con i dati
    const inputList = campi.slice(3, -1).map((campo) => (
        <input 
            key={`${campo}-${data.id}`}
            value={data[campo]}
            style={{width:width}}
            onChange={e => handleChange(campo, e.target.value)}
        />
    ));
    
    return <div className="list-month-item-wrapper">
        {labelList}
        {inputList}
        <label key={`totale-${data.id}`} htmlFor={campi[campi.length-1]} style={{width:width}}>
            {tot}
        </label>
    </div>;
};

export default ListMonthItem;