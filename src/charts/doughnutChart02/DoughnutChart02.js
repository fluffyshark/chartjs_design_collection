import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./doughnutChart02.css"

function DoughnutChart02() {

    const data = {
        labels: [
         
  
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [70, 30],
          backgroundColor: [
            'rgb(255, 99, 132)',
            "#f1f5f8",
          ],
          hoverOffset: 4,
          borderWidth: 2,
          borderRadius: 7,
       
        }],
        
      };

      var options = {        
        cutout: 90,
        maintainAspectRatio: false
    };


      const style = {width:"250px", height:"250px"}
    
    return (
        <div className='doughnutChart02'>
            <div className="doughnutChart02_chartStyle">
                <Doughnut data={data} style={{width:"250px",height:"250px"}} options={options} />
                <div className="textContainer">60%</div>
            </div>
        </div>
      )
    }

export default DoughnutChart02