import React from 'react';
import './styles.css';
import ShareCard from '../ShareCard';
import OnlineStreamCard from '../OnlineStreamCard';
import InterestCard from '../InterestCard';
import DescriptionCard from '../DescriptionCard';

const MiddleSection = (props) =>
    <div className="middle-section row">
        <div className="col-3 vertical-space-left">
            <ShareCard />
        </div>
        <div className="col-6 vertical-space-right">
            <div className="space">
                <OnlineStreamCard />
            </div>
            <div className="space">
                <InterestCard event={props.event}/>
            </div>
            <div className="space">
                <DescriptionCard event={props.event}/>
            </div>
        </div>
        <div className="col-3">
        </div>
    </div>;

export default MiddleSection;