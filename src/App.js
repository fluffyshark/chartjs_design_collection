import { useState } from 'react';
import './App.css';
import BarChart01 from './charts/barChart01/BarChart01';
import BarChart02 from './charts/barChart02/BarChart02';
import DoughnutChart01 from './charts/doughnutChart01/DoughnutChart01';
import DoughnutChart02 from './charts/doughnutChart02/DoughnutChart02';
import LineChart01 from './charts/lineChart01/LineChart01';
import LineChart02 from './charts/lineChart02/LineChart02';
import LineChart03 from './charts/lineChart03/LineChart03';
import PieChart01 from './charts/pieChart01/PieChart01';
import PolarChart01 from './charts/polarChart01/PolarChart01';
import RadarChart01 from './charts/radarChart01/RadarChart01';
import {UserData} from "./Data"
import ThreeDoughnuts from './designs/threeDoughnuts/ThreeDoughnuts';

function App() {

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


  return (
    <div className="App">
      <div className="App_top">Chart Collection</div>
      
      <div className="App_middle">

        <div className="section01_barCharts">
          <BarChart01/>
          <BarChart02/>
        </div>
        
        <div className="section02_lineCharts">
          <LineChart01/>
          <LineChart02/>
          <LineChart03/>
        </div>
        
        <div className="section03_pieCharts">
          <PieChart01/>
        </div>
        
        <div className="section04_polarCharts">
          <PolarChart01/>
        </div>
        
        <div className="section05_radarCharts">
          <RadarChart01/>
        </div>
        
        <div className="section06_doughnutCharts">
          <DoughnutChart01/>
          <DoughnutChart02/>
        </div>

        <div className="section07_designs01">
          <ThreeDoughnuts />
        </div>

        

      </div>

      <div className="App_bottom"></div>
      
      
    </div>
  );
}

export default App;
