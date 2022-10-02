
import React from 'react'
import PolarChart from '../../components/PolarChart';
import "./polarChart01.css"

function PolarChart01() {

 const data = {
  labels: [
    'Red',
    'Green',
    'Yellow',
    'Grey',
    'Blue'
  ],
  datasets: [{
    label: 'My First Dataset',
    data: [11, 16, 7, 3, 14],
    backgroundColor: [
      'rgb(255, 99, 132)',
      'rgb(75, 192, 192)',
      'rgb(255, 205, 86)',
      'rgb(201, 203, 207)',
      'rgb(54, 162, 235)'
    ]
  }]
};

const style = {width:"300px", height:"250px"}

  return (
    <div className='polarChart01'>
      <div className='polarChart01_chartStyle'>
        <PolarChart data={data} style={style}/>
      </div>
    </div>
  )
}

export default PolarChart01

