import React, { useState } from 'react'
import LineChart from '../../components/LineChart'
import {UserData} from "../../Data"
import "./lineChart02.css"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function LineChart02() {

    const [doubleLine, setDoubleLine] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65],
            fill: true,
            backgroundColor: "rgba(75,192,192,0.2)",
            borderColor: "rgba(75,192,192,1)",
            tension: 0.4,
          },
          {
            label: "Second dataset",
            data: [33, 25, 35, 51, 54, 76],
            fill: false,
            borderColor: "#742774",
            tension: 0.4,
          }
        ]
      })

      const style = {width:"100%"}


  return (
    <div className='lineChart02'>
        <div className='lineChart02_chartStyle'>
          <LineChart chartData={doubleLine} style={style}/>
        </div>
    </div>
  )
}

export default LineChart02