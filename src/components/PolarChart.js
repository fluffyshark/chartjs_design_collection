import React from "react";
import { PolarArea } from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"	

const PolarChart = ({data, style}) => {
 
	
    return (
        <div>
            <PolarArea data={data} style={style} options={{maintainAspectRatio: false}}/>
        </div>
    );
}
	
export default PolarChart;
