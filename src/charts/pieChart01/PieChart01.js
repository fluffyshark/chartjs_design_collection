import React, { useState } from 'react'
import PieChart from '../../components/PieChart'
import {UserData} from "../../Data"
import "./pieChart01.css"


// Imported standard and plain pie chart from PieChart.js
// Imported demo data as UserData from Data.js
function PieChart01() {

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

      const style = {width:"300px", height:"250px"}

  return (
    <div className='pieChart01'>
      <div className='pieChart01_chartStyle'>
        <PieChart chartData={userData} style={style}/>
      </div>
    </div>
  )
}

export default PieChart01