/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Spese.css";
import { useState,useEffect } from "react";
import { speseMensili } from "../../../data/data";
import ListMonthItem from "../list-month-item/ListMonthItem";


/*--------------------------------------------------
  SPESE MENSILI STRUCTURE
  --------------------------------------------------
*/
const Spese = () => {
    const [SpeseData, setSpeseData] = useState(speseMensili);
    const speseCampi = Object.keys(speseMensili[0]);
    const titles = [];
    const [style, setStyle] = useState({width:`${100 / speseCampi.length}%`});

    // genero dinamicamente i titoli
    for (var i=0; i<speseCampi.length; i++) {
        if (speseCampi[i] !== "id") {
            const myClass = (i>2 && i < speseCampi.length-1) ? "label-hidden-when-media-query" : "";
            const myTitle = speseCampi[i].charAt(0).toUpperCase() + speseCampi[i].slice(1);
            titles.push(
                <h4 key={`mensili-spese-row-${i}`} style={style} className={myClass}>{myTitle}</h4>
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
        const updatedState = SpeseData.map(item => {
            if (item.id === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setSpeseData(updatedState);
    };


    return <div className="mensili-spese-data-wrapper">
        <div className="mensili-spese-data-titles-wrapper">
            {titles}
        </div>
        <div>
            {SpeseData.map(month => (
                <ListMonthItem key={`spese-${month.id}`} data={month} campi={speseCampi}
                    style={style} handleInputChange={handleInputChange} />
            ))}
        </div>
    </div>
};

export default Spese;