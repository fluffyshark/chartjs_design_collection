import React, { useState } from 'react'
import LineChart from '../../components/LineChart'
import {UserData} from "../../Data"
import "./lineChart01.css"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function LineChart01() {

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
          tension: 0.5
        }]  
      })

      const style = {width:"100%"}

  return (
    <div className='lineChart01'>
        <div className='lineChart01_chartStyle'>
          <LineChart chartData={userData} style={style}/>
        </div>
    </div>
  )
}

export default LineChart01