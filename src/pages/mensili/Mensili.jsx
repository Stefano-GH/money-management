/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Mensili.css";
import { useState } from "react";
import { usciteMensili } from "../../data/data";
import ListMonthItem from "./list-month-item/ListMonthItem";

const PAGE_TITLE = "Spese Mensili";


/*--------------------------------------------------
  MENSILI STRUCTURE
  --------------------------------------------------
*/
const Mensili = () => {
    const [data, setData] = useState(usciteMensili);
    const campi = Object.keys(usciteMensili[0]);
    const titles = [];

    // genero dinamicamente i titoli
    const width = `${100 / campi.length}%`;
    for (var i=0; i<campi.length; i++) {
        if (campi[i] !== "id") {
            const myTitle = campi[i].charAt(0).toUpperCase() + campi[i].slice(1);
            titles.push(
                <h4 key={`mensili-row-${i}`} style={{width:width}}>{myTitle}</h4>
            );
        }
    }

    // gestisco la variazione dei campi di input
    const handleInputChange = (row, field, value) => {
        const updatedState = data.map(item => {
            if (item.id === row) {
                return { ...item, [field]: value};
            }
            return item;
        });
        setData(updatedState);
        console.log(data);
    };

    return <div className="mensili-main-wrapper">
        <div className="mensili-title-wrapper">
            <h2>{PAGE_TITLE}</h2>
        </div>

        <div className="mensili-switch-wrapper">
            switch
        </div>

        <div className="mensili-data-wrapper">
            <div className="mensili-data-titles-wrapper">
                {titles}
            </div>
            <div className="mensili-data">
                {data.map(month => (
                    <ListMonthItem key={month.id} data={month} campi={campi} width={width} handleInputChange={handleInputChange} />
                ))}
            </div>
        </div>
    </div>
}

export default Mensili;