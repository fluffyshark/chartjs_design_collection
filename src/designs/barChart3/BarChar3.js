import React from 'react'
import "./barChart3.css"
import { Bar } from "react-chartjs-2"
import {Chart as ChartJS} from "chart.js/auto"
import circleDropdown from "./circle_dropdown.png"


// Imported standard and plain bar chart from BarChart.js
// Imported demo data as UserData from Data.js
function BarChart03() {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov"],
        datasets: [{
          label: 'My First Dataset',
          data: [1800, 1600, 1000, 1700, 1000, 500, 1900, 500, 1500, 1400, 1000],
          backgroundColor: "#28cc75",
          borderColor: "#ffffff",
          borderWidth: 0,
        //  barThickness: 8,
          
          
        },
        {
            label: 'My First Dataset',
            data: [1500, 1400, 500, 1200, 1900, 600, 1400, 1100, 800, 1200, 2000],
            backgroundColor: "#695efa",
            borderColor: "#ffffff",
            borderWidth: 0,
        //  barThickness: 8,
          }
    ] ,
         
      }

      var options = {  
        //  Control bar thickness and space between bars 
        barPercentage: 0.8,
        categoryPercentage: 0.5,
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
      const style = {width:"525px"}


  return (
    <div className='barChart03'>
        <div className="barChart3_top">
          <div className="barChart3_top_left">
            <p className='barChart3_top_title'>Project Statistics</p>
            <p className='barChart3_top_subtitle'>Overall Information</p>
          </div>
          <div className="barChart3_top_right">
            <div className='barChart3_top_right_dropdown'>
              <p>Last year</p>
              <img src={circleDropdown} alt="" />
            </div>
          </div>
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