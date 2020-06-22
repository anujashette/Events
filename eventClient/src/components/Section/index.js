import React from 'react'
import './styles.css'
import TopSection from '../TopSection'
import MiddelSection from '../MiddleSection'

const Section = (props) =>
      <div className="section">
          <div className="cover">
              <img className="cover-picture" src={props.event.cover}
               alt="event cover picture">
               </img>
               <div className="path">
                 <ul>
                   <li><a>Home</a></li>
                   <li><a>Events</a></li>
                   <li><a>Comedy Shows</a></li>
                   <li><a>Aakash Mehta`s Open Mic On Mondays</a></li>
                 </ul>
              </div>
          </div>
          <div className="event-info">
            <TopSection event={props.event}/>
          </div>
          <div className="Middle-section">
            <MiddelSection event={props.event}/>
          </div>
      </div>;

export default Section;