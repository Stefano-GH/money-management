/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./NonRegolari.css";
import ListElement from "../../../components/list-element/ListElement";

const ENTRATE_NON_REGOLARI_TITOLO = "Extra";


/*--------------------------------------------------
  STRAORDINARIE STRUCTURE
  --------------------------------------------------
*/
const NonRegolari = ( {states,tipologia,handleStrInputChange} ) => {
    const lists = [];

    // genero le righe
    states.map((state) => {
        lists.push(
            <ListElement key={state.row} row={state.row} data={state.data} importo={state.importo} note={state.note}
                categoria={state.categoria} tipologia={tipologia} handleOrdInputChange={handleStrInputChange} />
        );
    })

    return <div className="non-regolari-side-wrapper">
        <h2>{ENTRATE_NON_REGOLARI_TITOLO}</h2>
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

export default NonRegolari;