/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./ListElement.css";
import { categorieOrd,categorieStr, categorieReg,categorieNonReg } from "../../data/data";


/*--------------------------------------------------
  ORDINARIE STRUCTURE
  --------------------------------------------------
*/
const ListElement = ( {row,data,importo,note,categoria,tipologia,handleOrdInputChange} ) => {
    var categorie = [];
    if (tipologia === "ordinaria") {
        categorie = categorieOrd;
    } else if (tipologia === "straordinaria") {
        categorie = categorieStr;
    } else if (tipologia === "regolare") {
        categorie = categorieReg;
    } else {
        categorie = categorieNonReg;
    }

    const handleChange = (field, value) => {
        handleOrdInputChange(row, field, value);
    }

    return <div className="list-wrapper">
        <input key={`${tipologia}-${row}-1`} type="text" value={data} onChange={(e) => handleChange("data", e.target.value)} />
        <input key={`${tipologia}-${row}-2`} type="text" value={importo} onChange={(e) => handleChange("importo", e.target.value)} />
        <input key={`${tipologia}-${row}-3`} type="text" value={note} onChange={(e) => handleChange("note", e.target.value)} />
        <select key={`${tipologia}-${row}-4`} value={categoria} onChange={(e) => handleChange("categoria", e.target.value)}>
            {categorie.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
}

export default ListElement;