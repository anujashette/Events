import React from 'react'
import './styles.css'
import TopSection from '../TopSection'
import MiddelSection from '../MiddleSection'

const Section = () =>
      <div className="section">
          <div className="cover">
              <img className="cover-picture" src="https://in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-aakash-mehtas-open-mic-on-mondays-2020-5-26-t-20-56-59.jpg"
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
            <TopSection/>
          </div>
          <div className="Middle-section">
            <MiddelSection/>
          </div>
      </div>;

export default Section;