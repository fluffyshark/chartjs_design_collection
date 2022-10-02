import React from 'react'
import DoughnutChart from '../../components/DoughnutChart'
import "./doughnutChart01.css"

function DoughnutChart01() {

    const data = {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [300, 50, 100],
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }],
        
      };

      const style = {width:"250px", height:"250px"}
    
    return (
        <div className='doughnutChart01'>
            <div className="doughnutChart01_chartStyle">
                <DoughnutChart data={data} style={style} />
            </div>
        </div>
      )
    }

export default DoughnutChart01