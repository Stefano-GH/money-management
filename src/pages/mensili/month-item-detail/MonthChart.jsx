/*--------------------------------------------------
  LIBRARIES AND CONSTANTS
  --------------------------------------------------
*/
import "./MonthChart.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


/*--------------------------------------------------
  MONTH CHART STRUCTURE
  --------------------------------------------------
*/
const MonthChart = (data) => {
    const campi = Object.keys(data.data).slice(3,-1).map((campo) => (
        campo
    ));

    const preparedData = campi.map((campo) => (
        data.data[campo]
    ))

    const chartData = {
        labels: campi,
        datasets: [
            {
                label: 'Spese',
                data: preparedData,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: `Grafico dei dati`,
            },
        },
    };
    
    return <Bar
        data={chartData}
        options={options}
        className="bar"
        style={{height:'300px'}}
    />
};

export default MonthChart;