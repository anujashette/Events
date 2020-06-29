import React from 'react'
import './styles.css'
import logo from '../../images/th-icon-8.jpg'; 


const InterestCard = (props) =>
      <div className="interest-card">
            <p className="top-div">Click on Interested to stay updated about this event</p>
            <div className="bottom-div">
                  <div className="like-div">
                        <span>
                              <img className="thumb" src={logo}/>
                              <span className="likes">{props.event.interested > 0 ? props.event.interested: null}</span>
                        </span>
                        <p className="like-description">People have shown interest recently</p>
                  </div>
                  <button className="btn-interested">
                        Interested
                  </button>
            </div>
            <div className="bottom-line"></div>
      </div>;

export default InterestCard;