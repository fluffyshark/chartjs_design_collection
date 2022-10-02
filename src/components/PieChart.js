import React from 'react'
import { Pie } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"

function PieChart({chartData, style}) {
  return (
    <div>
        <Pie data={chartData} style={style} options={{maintainAspectRatio: false}}/>
    </div>
  )
}

export default PieChart