import  "react";
import {Bar, Doughnut, Line} from "react-chartjs-2";

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend,
} from "chart.js";


// Register necessary chart.js modules
ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    ArcElement,
    Tooltip,
    Legend
);

const CombinedCharts = () => {
    // Data for Bar Chart
    const barData = {
        labels: ["January", "February", "March", "April"],
        datasets: [
            {
                label: "Bar Chart Data",
                data: [12, 19, 3, 5],
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1,
            },
        ],
    };

    // Data for Circular Chart (Doughnut Chart)
    const circularData = {
        labels: ["Completed", "Pending", "Failed"],
        datasets: [
            {
                data: [60, 25, 15],
                backgroundColor: ["#4BC0C033", "#FF638433", "#706004"],
                borderWidth: 1,
            },
        ],
    };

    // Data for Pulse Chart (Line Chart)
    const pulseData = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
            {
                label: "Pulse Data",
                data: [60, 75, 80, 70],
                borderColor: "rgba(255, 99, 132, 1)",
                backgroundColor: "rgba(255, 99, 132, 0.2)",
                tension: 0.4, // Smooth curve
                fill: true,
            },
        ],
    };

    // Common options
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
                margin:0
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr",  margin: 'auto'  }}>
            {/* Bar Chart */}
            <div className="md-5 p-4">
                <h3>Bar Chart</h3>
                <Bar data={barData} options={options} />
            </div>

            {/* Circular Chart */}
            <div className="md-7 p-4">
                <h3>Circular Chart</h3>
                <Doughnut data={circularData} />
            </div>
            {/* Pulse Chart */}
            <div className="md-7 p-4">
                <h3>Pulse Chart</h3>
                <Line data={pulseData} options={options} />
            </div>
        </div>
    );
};

export default CombinedCharts;
