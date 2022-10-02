import React from 'react'
import { Radar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"	

function RadarChart({data, style}) {
    return (
        <div>
            <Radar data={data} style={style} options={{maintainAspectRatio: false}} />
        </div>
    );
}

export default RadarChart