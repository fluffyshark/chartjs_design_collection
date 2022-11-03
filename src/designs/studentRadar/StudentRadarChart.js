
import React from 'react'
import { Radar } from 'react-chartjs-2';
import {Chart as ChartJS} from "chart.js/auto"	
import "./studentRadarChart.css"

function StudentRadarChart() {

  const data = {
    labels: [
      'Moment 1',
      'Moment 2',
      'Moment 3',
      'Moment 4',
     
    ],
    datasets: [{
      label: '',
      data: [1, 2, 3, 3],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
  };
  
  var options = {  
    scale: {
      
      ticks: {
          beginAtZero: true,
          max: 3,
          min: 0,
          stepSize: 3,
      },
  },
  plugins: {
    legend: {
      position: 'none',
    },
  }
    
};

const style = {width:"300px", height:"250px"}

  return (
    <div className='radarChart01'>
      <div className='radarChart01_chartStyle'>
        <Radar data={data} style={style} options={options} />
      </div>
    </div>
  )
}

export default StudentRadarChart

