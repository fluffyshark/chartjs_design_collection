import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import "./opportunityIndex.css"
import calendarIcon from "./calendarIcon.png"
import dropdownArrowIcon from "./dropdownArrowIcon.png"

function OpportunityIndex() {


  
    const data = {
        labels: [
         
  
          
        ],
        datasets: [{
          label: 'My First Dataset',
          data: [432, 234, 643],
          backgroundColor: [
            '#ebebeb',
            "#5967ff",
            "#5fd8e4"
          ],
          hoverOffset: 4,
          borderWidth: 5,
          borderRadius: 7,
       
        }],
        
      };

      var options = {        
        cutout: 65,
        maintainAspectRatio: false
    };


      const style = {width:"170px", height:"170px"}
    
    return (
        <div className='opportunityIndex'>
            <div className="opportunityIndex_top">
                <p>Opportunity Index</p>
                <div>
                    <img id="opportunityIndex_calendar" src={calendarIcon} alt="" />
                    <p>All time</p>
                    <img id="opportunityIndex_dropdownarrow" src={dropdownArrowIcon} alt="" />
                </div>
            </div>
            <div className="opportunityIndex_middle">
                <div className="opportunityIndex_chartStyle">
                    <Doughnut data={data} style={{width:"170px",height:"170px"}} options={options} />
                    <div className="opportunityIndex_textContainer">
                        <p className='opportunityIndex_summary'>1,239</p>
                        <p className='opportunityIndex_smalltitle'>Opportunities</p>
                    </div>
                </div>
            </div>
            <div className="opportunityIndex_bottom">
                <div className="opportunityIndex_bottom_first">
                    <p className='opportunityIndex_bottom_p'>234</p>
                    <div className="opportunityIndex_bottom_box" id="opportunityColor01"><p>Deals Won</p></div>
                </div>
                <div className="opportunityIndex_bottom_first">
                    <p className='opportunityIndex_bottom_p'>643</p>
                    <div className="opportunityIndex_bottom_box" id="opportunityColor02"><p>In Progress</p></div>
                </div>
                <div className="opportunityIndex_bottom_first">
                    <p className='opportunityIndex_bottom_p'>432</p>
                    <div className="opportunityIndex_bottom_box" id="opportunityColor03"><p>Deals Lost</p></div>
                </div>
            </div>
            
        </div>
      )
    }

export default OpportunityIndex