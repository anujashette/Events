import React from 'react'
import './styles.css'
import logo from '../../images/th-icon-8.jpg'; 


const InterestCard = () =>
      <div className="interest-card">
            <p className="top-div">Click on Interested to stay updated about this</p>
            <div className="bottom-div">
                  <div className="like-div">
                        <span>
                              <img className="thumb" src={logo}/>
                              <span className="likes">169</span>
                        </span>
                        <p className="like-description">People have shown interest recently</p>
                  </div>
                  <button className="btn-interested">
                        Interested
                  </button>
            </div>
      </div>;

export default InterestCard;