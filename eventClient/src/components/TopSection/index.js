import React, { useEffect, useState } from 'react';
import './styles.css';

const TopSection = (props) => {
    // const [startDate,setStartDate] = useState();
    // const [endDate,setEndDate] = useState();

    // useEffect(() =>{
    //     // console.log(dateConverter(startDate));

    //     // setStartDate(dateConverter(startDate));
    //     // setEndDate(dateConverter(endDate));
    // },[])

    function dateConverter(dates) {
        let date = new Date(dates);
        const day = date.toLocaleString('default', { weekday: 'short' });
        const dateNumber = date.getDate();
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        return `${day} ${dateNumber} ${month} ${year}`;
    }

    return (
        <div className="event-details">
            {window.innerWidth > 990 ?
                <div>
                    <div className="line"></div>
                    <div className="top-section row">
                        <div className="col-6">
                            <h1 className="Event-title">{props.event.title}</h1>
                            <div className="additional-details">
                                {props.event.eventType} | {props.event.language} | {props.event.allowedAge}+ | {props.event.duration}
                            </div>
                        </div>
                        <div className="col-6 btn-div">
                            <button className="btn-register">Register</button>
                        </div>
                    </div>
                    <div className="border-div"></div>
                    <div className="bottom-section row">
                        <div className="additional-details col-12">
                            <span>{dateConverter(props.event.startDate)} - {dateConverter(props.event.endDate)}</span>
                            <span>
                                <svg className="watch-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" id="location-yellow"><g fill="none" fill-rule="evenodd"><path d="M15.3639602,2.66869301 C11.8492406,-0.889564336 6.15075942,-0.889564336 2.63603975,2.66869301 C-0.878679917,6.22810826 -0.878679917,11.9979737 2.63603975,15.556231 L8.99943746,22 L15.3639602,15.556231 C18.8786799,11.9979737 18.8786799,6.22810826 15.3639602,2.66869301 Z" fill="#FEC700" fill-rule="nonzero"></path><path d="M9,13 C7.93087926,13 6.92737821,12.584 6.17035111,11.8288 C4.60988296,10.2688 4.60988296,7.7312 6.17035111,6.1712 C6.92577773,5.416 7.93087926,5 9,5 C10.0691207,5 11.0742223,5.416 11.8296489,6.1712 C13.390117,7.7312 13.390117,10.2704 11.8296489,11.8288 C11.0742223,12.584 10.0691207,13 9,13 Z" fill="#FFF"></path></g></svg>
                &nbsp; {props.event.broadcastPlatform}&nbsp;&nbsp;|&nbsp;&nbsp;<span className="rupee">&#8377; {props.event.price}</span>
                            </span>
                        </div>
                    </div>
                </div>
                :
                <div className="top-section-mobile">
                    <div className="event-type-tag">
                        <div>COMEDY SHOWS</div>
                        <div>ONLINE STREAMING EVENTS</div>
                    </div>
                    <h1 className="Event-title">{props.event.title}</h1>
                    <div className="additional-details">
                        <div>{dateConverter(props.event.startDate)} - {dateConverter(props.event.endDate)}</div>
                        <div>
                            <svg className="watch-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" id="location-yellow"><g fill="none" fill-rule="evenodd"><path d="M15.3639602,2.66869301 C11.8492406,-0.889564336 6.15075942,-0.889564336 2.63603975,2.66869301 C-0.878679917,6.22810826 -0.878679917,11.9979737 2.63603975,15.556231 L8.99943746,22 L15.3639602,15.556231 C18.8786799,11.9979737 18.8786799,6.22810826 15.3639602,2.66869301 Z" fill="#FEC700" fill-rule="nonzero"></path><path d="M9,13 C7.93087926,13 6.92737821,12.584 6.17035111,11.8288 C4.60988296,10.2688 4.60988296,7.7312 6.17035111,6.1712 C6.92577773,5.416 7.93087926,5 9,5 C10.0691207,5 11.0742223,5.416 11.8296489,6.1712 C13.390117,7.7312 13.390117,10.2704 11.8296489,11.8288 C11.0742223,12.584 10.0691207,13 9,13 Z" fill="#FFF"></path></g></svg>
                                {props.event.broadcastPlatform}
                        </div>
                    </div>
                </div>
            }
        </div>)
};

export default TopSection;