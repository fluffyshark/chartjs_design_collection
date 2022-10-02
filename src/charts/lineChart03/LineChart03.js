import React, { useState } from 'react'
import { Line } from "react-chartjs-2"
import "./lineChart03.css"


function LineChart03() {
  

    const [data, setData] = useState({
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
        datasets: [
          {
            label: "First dataset",
            data: [33, 53, 85, 41, 44, 65, 56, 34, 75, 30],
            fill: true,
            backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 120);
                gradient.addColorStop(0, "rgba(35,101,249,0.6)");
                gradient.addColorStop(1, "rgba(35,101,249,0)");
                return gradient;
              },
            borderColor: "rgba(35,101,249,1)",
            tension: 0.4,
          },
        
        ]
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
        responsive: true,
        plugins: {
          legend: {
            position: 'none',
          },
         
        }
      }
      

      const style = {width:"100%"}


  return (
    <div className='lineChart03'>
        <div className='lineChart03_chartStyle'>
          <Line data={data} style={style} options={options}/>
        </div>
    </div>
  )
}

export default LineChart03