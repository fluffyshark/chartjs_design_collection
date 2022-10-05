import React from 'react'
import "./threeDoughnuts.css"
import icon_bookmark from "./icons/icon_bookmark.png"
import icon_arrowup from "./icons/icon_arrowup.png"
import icon_dotmenu from "./icons/icon_dotmenu.png"
import icon_heart from "./icons/icon_heart.png"
import ChartLocal from './Charts/ChartLocal'
import ChartImported from './Charts/ChartImported'
import ChartTotal from './Charts/ChartTotal'

function ThreeDoughnuts() {
  return (
    <div className='threeDoughnuts'>
        <div className="threeDoughnuts_top">
            <div className="threeDoughnuts_top_title">Overview</div>
            <div className="threeDoughnuts_top_icons">
              <img src={icon_heart} alt="" />
              <img src={icon_bookmark} alt="" />
              <img src={icon_dotmenu} alt="" />
            </div>
        </div>
        <div className="threeDoughnuts_main">
          <div className="chartLocalContainer"><ChartLocal /><p>Local</p></div>
          <div className="chartLocalContainer"><ChartImported /><p>Imported</p></div>
          <div className="chartLocalContainer"><ChartTotal /><p>Total</p></div>
        </div>
        <div className="threeDoughnuts_bottom">
          <img src={icon_arrowup} alt="" />
          <p>1.2% more than yesterday</p>
        </div>
    </div>
  )
}

export default ThreeDoughnuts