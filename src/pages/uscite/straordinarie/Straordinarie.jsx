import "./Straordinarie.css";
import { data } from "../../../data/data";
import ListElement from "../list-element/ListElement";

const Straordinarie = () => {
    const tipologia = "straordinaria";
    const lists = new Array(5).fill(<ListElement className="new-item" data="" importo="" note="" categoria="altro" />);

    return <div className="straordinarie-side-wrapper">
        <h2>Uscite Straordinarie</h2>
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

export default Straordinarie;