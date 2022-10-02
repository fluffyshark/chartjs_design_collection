import React, { useState } from 'react'
import BarChart from '../../components/BarChart'
import {UserData} from "../../Data"
import "./barChart02.css"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function BarChart02() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "#ffb1c1",
            "#9ad0f5",
          ],
          borderColor: ["#ff859f","#64b7ef"],
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
          tension: 0.5
        }]  
      })

      const options = {
        scales: {
          x: {
            grid: {
              display: false,
            }
          },
          y: {
            grid: {
              display: false
            }
          },
        },
        indexAxis: 'y',
        // Elements options apply to all of the options unless overridden in a dataset
        // In this case, we are setting the border of each horizontal bar to be 2px wide
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart'
          },
          
        }
      }

      const style = {width:"100%"}

  return (
    <div className='barChart02'>
        <div className="barChart02_chartStyle">
          <BarChart chartData={userData} options={options} style={style} />
        </div>
    </div>
  )
}


export default BarChart02