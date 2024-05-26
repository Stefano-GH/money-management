/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Incassi.css";
import { useState,useEffect } from "react";
import { incassiMensili } from "../../../data/data";
import ListMonthItem from "../list-month-item/ListMonthItem";


/*--------------------------------------------------
  INCASSI MENSILI STRUCTURE
  --------------------------------------------------
*/
const Incassi = () => {
    const [incassiData, setIncassiData] = useState(incassiMensili);
    const incassiCampi = Object.keys(incassiMensili[0]);
    const titles = [];
    const width = `${100 / incassiCampi.length}%`;
    const [style, setStyle] = useState({width:`${100 / incassiCampi.length}%`});

    // genero dinamicamente i titoli
    for (var i=0; i<incassiCampi.length; i++) {
        if (incassiCampi[i] !== "id") {
            const myClass = (i>2 && i < incassiCampi.length-1) ? "label-hidden-when-media-query" : "";
            const myTitle = incassiCampi[i].charAt(0).toUpperCase() + incassiCampi[i].slice(1).replace("_", " ");
            titles.push(
                <h4 key={`mensili-incassi-row-${i}`} style={style} className={myClass}>{myTitle}</h4>
            );
        }
    }

    useEffect(() => {
        // analizzo le dimensioni dello schermo
        const handleResize = () => {
            if (window.innerWidth < 900) {
                setStyle({width: "30%"});
            }
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // pulisco il listener quando l'elemento viene smontato 
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    },[]);


    // gestisco la variazione dei campi di input
    const handleInputChange = (row, field, value) => {
        const updatedState = incassiData.map(item => {
            if (item.id === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setIncassiData(updatedState);
    };


    return <div className="mensili-incassi-data-wrapper">
        <div className="mensili-incassi-data-titles-wrapper">
            {titles}
        </div>
        <div>
            {incassiData.map(month => (
                <ListMonthItem key={`incassi-${month.id}`} data={month} campi={incassiCampi}
                    style={style} handleInputChange={handleInputChange} />
            ))}
        </div>
    </div>
};

export default Incassi;