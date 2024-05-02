import "./ListElement.css";
import { useState } from "react";
import { categorieOrd,categorieStr } from "../../../data/data";

const ListElement = ( {data,importo,note,categoria,tipologia} ) => {
    const [selectedData, setSelectedData] = useState(data);
    const [selectedImporto, setSelectedImporto] = useState(importo);
    const [selectedNote, setSelectedNote] = useState(note);
    const [selectedCategoria, setSelectedCategoria] = useState(categoria);

    const categorie = (tipologia === "ordinaria") ? categorieOrd : categorieStr;

    const handleSelectedData = (e) => {
        setSelectedData(e.target.value);
    }

    const handleSelectedImporto = (e) => {
        setSelectedImporto(e.target.value);
    }

    const handleSelectedNote = (e) => {
        setSelectedNote(e.target.value);
    }

    const handleSelectedCategoria = (e) => {
        setSelectedCategoria(e.target.value);
    }

    return <div className="list-wrapper">
        <input type="text" value={selectedData} onChange={handleSelectedData} />
        <input type="flotextat" value={selectedImporto} onChange={handleSelectedImporto} />
        <input type="text" value={selectedNote} onChange={handleSelectedNote} />
        <select value={selectedCategoria} onChange={handleSelectedCategoria}>
            {categorie.map(option => (
                <option key={option} value={option}>{option}</option>
            ))}
        </select>
    </div>
}

export default ListElement;