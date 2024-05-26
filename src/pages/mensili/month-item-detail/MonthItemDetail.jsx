/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./MonthItemDetail.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import MonthChart from "./MonthChart";


/*--------------------------------------------------
  LIST MONTH ITEM STRUCTURE
  --------------------------------------------------
*/
const MonthItemDetail = () => {
  const location = useLocation();
  const initialData = location?.state || {};
  const [data, setData] = useState(initialData);
  const campi = Object.keys(data);

  // gestisco la variazione dei campi
  const handleChange = (field, value) => {
    setData(prevData => (
      {...prevData, [field]: value}
    ));
  }

  // genero dinamicamente i titoli
  const titles = campi.slice(3,-1).map((campo) => (
    <h4 key={`mensili-dettaglio-${campo}`}>
      {campo.charAt(0).toUpperCase() + campo.slice(1)}
    </h4>
  ));

  // genero dinamicamente i campi di input
  const inputList = campi.slice(3,-1).map((campo) => (
    <input 
      key={campo}
      value={data[campo]}
      onChange={e => handleChange(campo, e.target.value)}
    />
  ))

  return <div className="mensili-detail-wrapper">
    <h2>
      {data.mese.charAt(0).toUpperCase() + data.mese.slice(1)} - {data.anno}
    </h2>
    
    <div className="mensili-detail-data-wrapper">
      <div className="mensili-detail-titles">
        {titles}
      </div>
      <div className="mensili-detail-input">
        {inputList}
      </div>
    </div>

    <div className="mensili-detail-chart">
      <MonthChart data={data} />
    </div>
  </div>
}

export default MonthItemDetail;