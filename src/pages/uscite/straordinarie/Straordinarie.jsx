/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./Straordinarie.css";
import ListElement from "../../../components/list-element/ListElement";

const USCITE_STRAORDINARIE_TITOLO = "Uscite Straordinarie";


/*--------------------------------------------------
  STRAORDINARIE STRUCTURE
  --------------------------------------------------
*/
const Straordinarie = ( {states,tipologia,handleStrInputChange} ) => {
    const lists = [];

    // genero le righe
    states.map((state) => {
        lists.push(
            <ListElement key={state.row} row={state.row} data={state.data} importo={state.importo} note={state.note}
                categoria={state.categoria} tipologia={tipologia} handleOrdInputChange={handleStrInputChange} />
        );
    })

    return <div className="straordinarie-side-wrapper">
        <h2>{USCITE_STRAORDINARIE_TITOLO}</h2>
        <div className="table-wrapper">
            <div className="label-wrapper">
                <h3>  Data</h3>
                <h3>Importo (€)</h3>
                <h3>Note</h3>
                <h3>Categoria</h3>
            </div>
            
            {lists}    
        
        </div>
    </div> 
}

export default Straordinarie;