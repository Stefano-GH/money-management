import "./Ordinarie.css";
import { data } from "../../../data/data";
import ListElement from "../list-element/ListElement";

const Ordinarie = () => {
    const tipologia = "ordinaria";
    const lists = new Array(5).fill(<ListElement className="new-item" data="" importo="" note="" categoria="altro" />);

    return <div className="ordinarie-side-wrapper">
        <h2>Uscite Ordinarie</h2>
        <div className="table-wrapper">
            <div className="label-wrapper">
                <h3>  Data</h3>
                <h3>Importo (€)</h3>
                <h3>Note</h3>
                <h3>Categoria</h3>
            </div>
            {data.map((el) => (
                (el.tipologia === tipologia) ? 
                    <ListElement data={el.data} importo={el.importo} note={el.note} categoria={el.categoria} tipologia={tipologia} />
                    : null
            ))}
            
            {lists}
            
        </div>
    </div>      
}

export default Ordinarie;