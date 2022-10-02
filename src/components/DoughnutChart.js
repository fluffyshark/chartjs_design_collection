import React from 'react'
import {Chart as ChartJS} from "chart.js/auto"
import { Doughnut } from 'react-chartjs-2'

function DoughnutChart({data, style}) {

 

  return (
    <div>
        <Doughnut data={data} style={style} options={{maintainAspectRatio: false}} />
    </div>
  )
}

export default DoughnutChart