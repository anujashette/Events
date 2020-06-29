import React from 'react';
import './styles.css';
import ShareCard from '../ShareCard';
import OnlineStreamCard from '../OnlineStreamCard';
import InterestCard from '../InterestCard';
import DescriptionCard from '../DescriptionCard';

const MiddleSection = (props) =>
<div>
    <div className="middle-section row">
        <div className="col-3 vertical-space-left">
            <ShareCard />
        </div>
        <div className="col-6 vertical-space-right">
            <div className="space">
                <OnlineStreamCard />
            </div>
            <div className="space">
                <InterestCard event={props.event} />
            </div>
            <div className="space">
                <DescriptionCard event={props.event} />
            </div>
        </div>
        <div className="col-3">
        </div>
         </div>
         <footer className="footer-mobile">
             <div>
             <span className="price">
                &#8377; {props.event.price}
             </span>
             <span className="btn">
                <button className="btn-register">Register</button>
            </span>
             </div>
         </footer>
    </div>;

export default MiddleSection;