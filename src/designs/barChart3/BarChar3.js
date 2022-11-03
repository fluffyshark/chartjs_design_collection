import React, { useState } from 'react'
import {UserData} from "../../Data"
import "./barChart3.css"
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function BarChart03() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [{
          label: 'My First Dataset',
          data: [1800, 1600, 1000, 1700, 1000, 500, 1900],
          backgroundColor: "#28cc75",
          borderColor: "#ffffff",
          borderWidth: 4,
          barThickness: 17,
          
        },
        {
            label: 'My First Dataset',
            data: [1500, 1400, 500, 1200, 1900, 600, 1400],
            backgroundColor: "#695efa",
            borderColor: "#ffffff",
            borderWidth: 4,
            barThickness: 17,
          }
    ] ,
         
      }

      var options = {  
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
         
          legend: {
            position: 'none',
          },
        
         
        },
        
        scales: {
          
            // to remove the labels
            x: {
              ticks: {
                display: true,
                font: {size: 11},
                color: "grey",
              
                
              },
        
              // to remove the x-axis grid
              grid: {
                drawBorder: false,
                display: false, 
                
              },
            },
            // to remove the y-axis labels
            y: {
      
              ticks: {
                display: true,
                beginAtZero: true,
                min: 0,
                max: 2000,
                stepSize: 400,
                color: "grey",
                callback: function(value, index, values) {
                  if (index === 7) {return "Target"} 
                  else {return tickNames[index]} 
                  
                }
              },
              // to remove the y-axis grid
              grid: {
                drawBorder: false,
                display: true,
                
              },
            },
          },
        
        
    };

      const tickNames = ["$0", "$400", "$800", "$1200", "$1600", "$2000"]
      const style = {width:"100%"}


  return (
    <div className='barChart03'>
        <div className="barChart3_top">
          <div className="barChart3_top_left">
            <p className='barChart3_top_title'>Project Statistics</p>
            <p className='barChart3_top_subtitle'>Overall Information</p>
          </div>
          <div className="barChart3_top_right"></div>
        </div>
        <div className="barChart3_bottom">
            <div className='barChart03_chartStyle'>
                <Bar data={data} options={options} style={style}/>
            </div>
        </div>
        
    </div>
  )
}

export default BarChart03