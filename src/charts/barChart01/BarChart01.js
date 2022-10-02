import React, { useState } from 'react'
import BarChart from '../../components/BarChart'
import {UserData} from "../../Data"
import "./barChart01.css"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function BarChart01() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 80, 81, 56, 55, 40],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)'
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 2,
          tension: 0.5
        }]  
      })

      const style = {width:"100%"}


  return (
    <div className='barChart01'>
        <div className='barChart01_chartStyle'>
          <BarChart chartData={userData} style={style}/>
        </div>
    </div>
  )
}

export default BarChart01