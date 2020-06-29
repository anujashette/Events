import React, { useEffect, useState } from 'react';
import './styles.css';

const TopSection = (props) => {

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
                            <span>{dateConverter(props.event.startDate)} {props.event.endDate !== "" ? "- " + dateConverter(props.event.endDate) : null}</span>
                            <span>
                                <svg className="watch-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" id="location-yellow"><g fill="none" fill-rule="evenodd"><path d="M15.3639602,2.66869301 C11.8492406,-0.889564336 6.15075942,-0.889564336 2.63603975,2.66869301 C-0.878679917,6.22810826 -0.878679917,11.9979737 2.63603975,15.556231 L8.99943746,22 L15.3639602,15.556231 C18.8786799,11.9979737 18.8786799,6.22810826 15.3639602,2.66869301 Z" fill="#FEC700" fill-rule="nonzero"></path><path d="M9,13 C7.93087926,13 6.92737821,12.584 6.17035111,11.8288 C4.60988296,10.2688 4.60988296,7.7312 6.17035111,6.1712 C6.92577773,5.416 7.93087926,5 9,5 C10.0691207,5 11.0742223,5.416 11.8296489,6.1712 C13.390117,7.7312 13.390117,10.2704 11.8296489,11.8288 C11.0742223,12.584 10.0691207,13 9,13 Z" fill="#FFF"></path></g></svg>
                                &nbsp; {props.event.broadcastPlatform}&nbsp;&nbsp;|&nbsp;&nbsp;<span className="rupee">&#8377; {props.event.price}</span>
                            </span>
                        </div>
                    </div>
                </div>
                :
                <div>
                    <div className="top-section-mobile">
                        <div className="event-type-tag">
                            <div>COMEDY SHOWS</div>
                            <div>ONLINE STREAMING EVENTS</div>
                        </div>
                        <h1 className="Event-title">{props.event.title}</h1>
                        <div className="additional-details">
                            <div> <span>
                                <svg className="calender" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="calender-blank"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.56689 1.75C7.98111 1.75 8.31689 2.08579 8.31689 2.5V4.28333H15.6831V2.5C15.6831 2.08579 16.0189 1.75 16.4331 1.75C16.8473 1.75 17.1831 2.08579 17.1831 2.5V4.28333H20C21.2426 4.28333 22.25 5.29068 22.25 6.53333V10.1V20C22.25 21.2426 21.2426 22.25 20 22.25H4C2.75736 22.25 1.75 21.2426 1.75 20V10.1V6.53332C1.75 5.29068 2.75736 4.28333 4 4.28333H6.81689V2.5C6.81689 2.08579 7.15268 1.75 7.56689 1.75ZM15.6831 5.78333V6.93333C15.6831 7.34755 16.0189 7.68333 16.4331 7.68333C16.8473 7.68333 17.1831 7.34755 17.1831 6.93333V5.78333H20C20.4142 5.78333 20.75 6.11911 20.75 6.53333V9.34998H3.25V6.53332C3.25 6.11911 3.58579 5.78333 4 5.78333H6.81689V6.93333C6.81689 7.34755 7.15268 7.68333 7.56689 7.68333C7.98111 7.68333 8.31689 7.34755 8.31689 6.93333V5.78333H15.6831ZM3.25 10.85H20.75V20C20.75 20.4142 20.4142 20.75 20 20.75H4C3.58579 20.75 3.25 20.4142 3.25 20V10.85Z" fill="#666"></path></svg>                            </span>
                                <span className="datesAndStream"> {dateConverter(props.event.startDate)} {props.event.endDate !== "" ? "- " + dateConverter(props.event.endDate) : null}</span></div>
                            <div>
                                <span>
                                    <svg className="stream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 19" id="location"><g fill="none" fill-rule="evenodd" stroke="#666" transform="translate(0 1)"><path stroke-linecap="round" stroke-linejoin="round" d="M6.982.181c4.158 0 6.283 3.19 6.283 6.38-.001 5.155-6.286 10.663-6.286 10.663S.67 11.718.671 6.564C.671 3.373 2.825.182 6.982.181z"></path><ellipse cx="7" cy="6.4" rx="2.6" ry="2.7"></ellipse></g></svg>
                                </span>
                                <span className="datesAndStream">{props.event.broadcastPlatform}</span>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line"></div>
                    <div className="more-info">
                        <div class="container">
                            <button type="button" className="btn more-btn" data-toggle="collapse" data-target="#button-info">More Information</button>
                            <div id="button-info" className="collapse show">
                               <div className="info-row">
                                   <span>
                                        <svg className="event-type" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="genre"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.16567 1.3131C7.36094 1.50837 7.36094 1.82495 7.16567 2.02021L4.97459 4.2113L7.16567 6.40239C7.36094 6.59765 7.36094 6.91423 7.16567 7.1095C6.97041 7.30476 6.65383 7.30476 6.45857 7.1095L4.26748 4.91841L2.07639 7.1095C1.88113 7.30476 1.56455 7.30476 1.36928 7.1095C1.17402 6.91423 1.17402 6.59765 1.36928 6.40239L3.56037 4.2113L1.36928 2.02021C1.17402 1.82495 1.17402 1.50837 1.36928 1.3131C1.56455 1.11784 1.88113 1.11784 2.07639 1.3131L4.26748 3.50419L6.45857 1.3131C6.65383 1.11784 6.97041 1.11784 7.16567 1.3131ZM11.0585 1.66924C11.1659 1.45429 11.4207 1.16666 11.845 1.16666C12.0371 1.16666 12.2098 1.22895 12.3425 1.30859C12.4704 1.38532 12.6061 1.50538 12.688 1.66924L12.6937 1.68108L14.7272 6.03034C14.8506 6.28234 14.8495 6.55836 14.7237 6.80991C14.5708 7.11585 14.2685 7.25594 13.9938 7.25594H9.63961C9.36486 7.25594 9.06263 7.11585 8.90966 6.80991C8.78296 6.5565 8.78273 6.27826 8.90898 6.02476L11.0585 1.66924ZM11.871 2.28243L9.91004 6.25594H13.7287L11.871 2.28243ZM8.8005 11.7887C8.8005 10.0988 10.1553 8.74403 11.8451 8.74403C13.535 8.74403 14.8898 10.0988 14.8898 11.7887C14.8898 13.4785 13.535 14.8333 11.8451 14.8333C10.1553 14.8333 8.8005 13.4785 8.8005 11.7887ZM11.8451 9.74403C10.7076 9.74403 9.8005 10.6511 9.8005 11.7887C9.8005 12.9262 10.7076 13.8333 11.8451 13.8333C12.9827 13.8333 13.8898 12.9262 13.8898 11.7887C13.8898 10.6511 12.9827 9.74403 11.8451 9.74403ZM2.19666 9.80059C2.18839 9.82499 2.17828 9.84854 2.1665 9.87108V13.8333H6.31234V9.80059H2.19666ZM1.47553 9.05307C1.41007 9.11852 1.34823 9.20116 1.30214 9.29748C1.21803 9.38695 1.1665 9.5074 1.1665 9.63988V13.994C1.1665 14.2415 1.28519 14.4471 1.41898 14.5809C1.55277 14.7146 1.75835 14.8333 2.00579 14.8333H6.47305C6.72049 14.8333 6.92607 14.7146 7.05986 14.5809C7.19365 14.4471 7.31234 14.2415 7.31234 13.994V9.63988C7.31234 9.39244 7.19365 9.18686 7.05986 9.05307C6.92607 8.91928 6.72049 8.80059 6.47305 8.80059H2.06234C1.8149 8.80059 1.60931 8.91928 1.47553 9.05307Z" fill="#666"></path></svg>                                   
                                    </span>
                                   <span className="label">{props.event.eventType}</span>
                               </div>
                               <div className="info-row">
                                   <span>
                                        <svg className="duration" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="hourGlass"><path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 2.70232C3.5 1.96466 4.09799 1.36667 4.83565 1.36667H11.5208C12.2585 1.36667 12.8565 1.96466 12.8565 2.70232V4.02097C12.8565 6.60469 10.762 8.69921 8.17824 8.69921C5.59452 8.69921 3.5 6.60469 3.5 4.02097V2.70232ZM4.83565 2.36667C4.65027 2.36667 4.5 2.51694 4.5 2.70232V4.02097C4.5 6.05241 6.14681 7.69921 8.17824 7.69921C10.2097 7.69921 11.8565 6.05241 11.8565 4.02097V2.70232C11.8565 2.51694 11.7062 2.36667 11.5208 2.36667H4.83565Z" fill="#666"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M8.17824 8.70079C6.14681 8.70079 4.5 10.3476 4.5 12.379V13.6977C4.5 13.8831 4.65027 14.0333 4.83565 14.0333H11.5208C11.7062 14.0333 11.8565 13.8831 11.8565 13.6977V12.379C11.8565 10.3476 10.2097 8.70079 8.17824 8.70079zM3.5 12.379C3.5 9.79531 5.59452 7.70079 8.17824 7.70079 10.762 7.70079 12.8565 9.79531 12.8565 12.379V13.6977C12.8565 14.4353 12.2585 15.0333 11.5208 15.0333H4.83565C4.09799 15.0333 3.5 14.4353 3.5 13.6977V12.379zM4.16667 6C4.16667 5.72386 4.39053 5.5 4.66667 5.5H11.6667C11.9428 5.5 12.1667 5.72386 12.1667 6 12.1667 6.27614 11.9428 6.5 11.6667 6.5H4.66667C4.39053 6.5 4.16667 6.27614 4.16667 6z" fill="#666"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.84862 12.097C6.5377 11.5152 7.38101 11.1086 8.31455 11.1086 9.24809 11.1086 10.0914 11.5152 10.7805 12.097 11.4695 12.6788 12.0305 13.456 12.4139 14.261 12.5326 14.5103 12.4267 14.8086 12.1774 14.9274 11.9281 15.0461 11.6298 14.9403 11.511 14.6909 11.1791 13.9939 10.6996 13.3375 10.1354 12.8611 9.5711 12.3847 8.94813 12.1086 8.31455 12.1086 7.68097 12.1086 7.058 12.3847 6.49374 12.8611 5.92947 13.3375 5.45004 13.9939 5.11808 14.6909 4.99935 14.9403 4.70098 15.0461 4.45167 14.9274 4.20236 14.8086 4.09651 14.5103 4.21525 14.261 4.59861 13.456 5.15956 12.6788 5.84862 12.097zM2.16667 1.86667C2.16667 1.59053 2.39053 1.36667 2.66667 1.36667H13.6667C13.9428 1.36667 14.1667 1.59053 14.1667 1.86667 14.1667 2.14281 13.9428 2.36667 13.6667 2.36667H2.66667C2.39053 2.36667 2.16667 2.14281 2.16667 1.86667z" fill="#666"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M2.16667 14.5333C2.16667 14.2572 2.39053 14.0333 2.66667 14.0333H13.6667C13.9428 14.0333 14.1667 14.2572 14.1667 14.5333C14.1667 14.8095 13.9428 15.0333 13.6667 15.0333H2.66667C2.39053 15.0333 2.16667 14.8095 2.16667 14.5333Z" fill="#666"></path></svg>                                   
                                        </span>
                                   <span className="label">{props.event.duration}</span>
                               </div>
                               <div className="info-row">
                                   <span>
                                        <svg className="language" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" id="Language"><g clip-path="url(#Language_clip0)" fill="#666"><path d="M13.4648 13.2465H9.48672C9.34513 13.2465 9.21702 13.3333 9.16983 13.467L8.33375 15.7795C8.28656 15.9131 8.15845 16 8.01686 16H7.30215C7.06616 16 6.90434 15.7661 6.98525 15.5455L10.7813 5.68756C10.8285 5.56058 10.9566 5.47369 11.0982 5.47369H11.8601C12.0017 5.47369 12.123 5.56058 12.177 5.68756L15.9798 15.5455C16.0674 15.7661 15.8989 16 15.6629 16H14.9549C14.8133 16 14.6852 15.9131 14.638 15.7795L13.7885 13.467C13.7345 13.3333 13.6064 13.2465 13.4648 13.2465zM10.1542 12.1103H12.804C13.04 12.1103 13.2019 11.8831 13.1209 11.6625L11.7927 8.05348C11.6848 7.75941 11.2667 7.75941 11.1589 8.05348L9.83734 11.6625C9.75643 11.8831 9.92499 12.1103 10.1542 12.1103zM1.03153.775271V.715121C1.71927.253968 2.38003 0 2.94641 0 3.64763 0 4.22749.314119 4.69946.888889 5.05007 1.32999 5.23212 1.82456 5.23212 2.3726 5.23212 2.83375 5.08379 3.18129 4.80734 3.47535 5.03659 3.62239 5.19841 3.77611 5.34 3.92982 5.53553 4.13033 5.85243 4.23058 6.29744 4.23058 6.70199 4.23058 7.09306 4.13701 7.44367 3.93651 7.54481 3.87636 7.59875 3.76274 7.59875 3.64912V1.30994C7.59875 1.12281 7.45041.975773 7.26162.975773H6.30418C6.17607.975773 6.06145.902256 6.00077.788638L5.71758.220551 5.77826.133667H9.399C9.52711.133667 9.64173.207185 9.70241.320802L9.9856.888889 9.92491.975773H8.84611C8.65732.975773 8.50899 1.12949 8.50899 1.30994L8.53596 8.10025 8.45504 8.18713 7.83473 8.02005C7.6864 7.97995 7.58526 7.84628 7.58526 7.69925L7.592 5.066C7.38298 5.12615 7.16048 5.15288 6.91101 5.15288 6.47274 5.15288 6.06145 5.0259 5.73107 4.77861L5.71758 4.79198C5.79849 5.0259 5.81198 5.27318 5.81198 5.55388 5.81198 6.63659 4.94219 7.38513 3.84316 7.38513 2.15079 7.38513.970848 6.00167.00666809 4.08354V4.03008L.471902 3.74269C1.36191 5.46032 2.35306 6.36257 3.43861 6.36257 4.214 6.36257 5.00962 5.78112 5.00962 4.99916 5.00962 4.33751 4.59832 3.90309 3.87687 3.90309 3.56672 3.90309 3.16891 4.01003 2.69019 4.19716 2.53511 4.25731 2.35981 4.20384 2.27215 4.07018L1.82041 3.36842 1.83389 3.31495C2.5958 3.00084 3.27005 2.8137 3.82293 2.8137 4.214 2.53968 4.45673 2.19883 4.45673 1.77778 4.45673 1.31662 4.06566.962406 3.53301.962406 3.06777.962406 2.52163 1.15622 1.9148 1.51044 1.75972 1.60401 1.56419 1.56391 1.46305 1.41688L1.03153.775271z"></path></g></svg>
                                   </span>
                                   <span className="label">{props.event.language}</span>
                               </div>
                               <div className="info-row">
                                   <span>
                                        <svg className="age-allowed"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" id="age-limit"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.5498 5.65002C15.5498 7.72002 13.8698 9.40002 11.7998 9.40002C9.7298 9.40002 8.0498 7.72002 8.0498 5.65002C8.0498 3.58002 9.7298 1.90002 11.7998 1.90002C13.8598 1.90002 15.5498 3.58002 15.5498 5.65002ZM14.0498 5.65002C14.0498 4.41002 13.0398 3.40002 11.7998 3.40002C10.5598 3.40002 9.5498 4.41002 9.5498 5.65002C9.5498 6.89002 10.5598 7.90002 11.7998 7.90002C13.0398 7.90002 14.0498 6.89002 14.0498 5.65002ZM14.78 11.65H8.79998C7.82998 11.65 7.01998 12.31 6.75998 13.2H5.22998C5.50998 11.48 6.99998 10.15 8.79998 10.15H14.78C16.58 10.15 18.06 11.47 18.34 13.2H16.81C16.56 12.31 15.75 11.65 14.78 11.65ZM18.6202 18.87V20.65C18.6202 20.79 18.5102 20.9 18.3702 20.9H5.22021C5.08021 20.9 4.97021 20.79 4.97021 20.65V18.9901V18.99V18.9635C5.43418 18.6625 5.71996 18.1457 5.71996 17.5501V16.3701C5.71996 15.7801 5.41996 15.2601 4.96996 14.9401L4.96972 14.9426C4.6915 14.747 4.34561 14.63 3.98021 14.63H3.51021C3.49021 14.74 3.48021 14.85 3.48021 14.96V15.37H3.47021V18.55H3.97021C4.47679 18.55 4.89004 18.1767 4.95996 17.6881V17.6981C4.89004 18.1868 4.47679 18.5601 3.97021 18.5601H3.47021V19.31V19.3101V20.66C3.47021 21.62 4.26021 22.41 5.22021 22.41H18.3702C19.3302 22.41 20.1202 21.62 20.1202 20.66V19.31H20.1299V19.3H20.9798C21.3898 19.3 21.7298 18.96 21.7298 18.55V15.37C21.7298 14.96 21.3898 14.62 20.9798 14.62H20.0899H20.0898H20.08C19.92 13.81 19.21 13.2001 18.36 13.2001H18.3498H18.34H16.8198C16.8698 13.3801 16.9098 13.5701 16.9098 13.7701V13.9501H16.9V13.7701C16.9 13.5701 16.86 13.3801 16.81 13.2001H6.77018H6.77H5.24018L5.23608 13.226C5.23073 13.2598 5.22541 13.2934 5.22032 13.3268C5.22666 13.2846 5.23333 13.2423 5.24 13.2001H5.22C4.37 13.2001 3.66 13.8101 3.5 14.6201H3.97C4.35 14.6201 4.69 14.7401 4.98 14.9401C4.99 14.8101 5.09 14.7001 5.22 14.7001H18.37C18.51 14.7001 18.62 14.8101 18.62 14.9501V15.04C18.25 15.37 18 15.84 18 16.37V17.55C18 18.08 18.24 18.55 18.62 18.87V15.0501C18.9281 14.7917 19.3152 14.6222 19.742 14.6201C19.3188 14.6247 18.9257 14.7936 18.6299 15.05V18.8784L18.6202 18.87ZM18.7644 18.9835C18.8068 19.0135 18.8503 19.0417 18.8951 19.0678C18.8503 19.0414 18.8067 19.0133 18.7644 18.9835ZM20.1198 18.56V18.55H19.75C19.2 18.55 18.75 18.1 18.75 17.55V16.37C18.75 15.82 19.2 15.37 19.75 15.37H19.7499C19.1999 15.37 18.7499 15.82 18.7499 16.37V17.55C18.7499 18.1 19.1999 18.55 19.7499 18.55V18.56H20.1198ZM20.12 15.37V16.12H19.75C19.61 16.12 19.5 16.23 19.5 16.37V17.55C19.5 17.69 19.61 17.8 19.75 17.8H20.12V18.55H20.1201V17.8H20.2301V16.12H20.1201V15.37H20.12ZM3.97298 19.31C4.35094 19.2995 4.68924 19.1802 4.96818 18.9914C4.68921 19.1901 4.34106 19.3094 3.97298 19.31ZM5.18018 13.9501V13.7701C5.18018 13.736 5.18104 13.7026 5.18264 13.6695C5.18093 13.7031 5.18 13.7366 5.18 13.7701V13.9501H5.18018ZM3.47 18.55V19.3H2.75C2.34 19.3 2 18.96 2 18.55V15.37C2 14.96 2.34 14.62 2.75 14.62H3.5C3.48 14.73 3.47 14.84 3.47 14.95V15.37V18.55ZM4.22021 17.55C4.22021 17.69 4.11021 17.8 3.97021 17.8H3.50021V16.12H3.97021C4.11021 16.12 4.22021 16.23 4.22021 16.37V17.55Z" fill="#666"></path></svg>
                                   </span>
                                   <span className="label">{props.event.allowedAge}+</span>
                               </div>
                               <div className="info-row">
                                   <span>
                                        <svg className="online-stream" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" fill="none" id="live-stream-black"><path d="M9.14974 7.17072C8.51576 7.81718 7.48824 7.81718 6.85425 7.17072 6.22046 6.52425 6.22046 5.47604 6.85425 4.82958 7.48824 4.18311 8.51576 4.18311 9.14974 4.82958 9.78353 5.47604 9.78353 6.52425 9.14974 7.17072zM11.3672 9.67916C11.1695 9.67916 10.9717 9.60204 10.8212 9.44759 10.5201 9.13951 10.5207 8.64031 10.8222 8.33282 11.4331 7.70967 11.7695 6.88127 11.7695 6.00025 11.7695 5.11923 11.4331 4.29082 10.8222 3.66768 10.5207 3.35999 10.5201 2.86099 10.8212 2.5527 11.1221 2.24462 11.6106 2.24402 11.9121 2.55171 12.8152 3.47278 13.3125 4.69736 13.3125 6.00025 13.3125 7.30294 12.8152 8.52772 11.9121 9.44879 11.7615 9.60243 11.5644 9.67916 11.3672 9.67916z" fill="#666"></path><path d="M13.1123 11.9999C12.9146 11.9999 12.7169 11.9228 12.5663 11.7685 12.2652 11.4602 12.2658 10.9613 12.5673 10.6536 13.7861 9.41045 14.4575 7.75782 14.4575 5.99997 14.4575 4.24213 13.7861 2.5895 12.5673 1.34639 12.2658 1.0387 12.2652.539701 12.5663.231414 12.8674-.0766726 13.3557-.0772705 13.6572.230418 15.1682 1.77145 16.0005 3.82045 16.0003 5.99997 16.0003 8.1795 15.1682 10.2287 13.6572 11.7697 13.5067 11.9232 13.3095 11.9999 13.1123 11.9999zM4.63295 9.67923C4.43579 9.67923 4.23863 9.60251 4.08789 9.44886 3.18478 8.52779 2.6875 7.30302 2.6875 6.00032 2.6875 4.69743 3.18478 3.47285 4.08789 2.55178 4.38937 2.24409 4.87788 2.24449 5.17879 2.55278 5.47988 2.86087 5.4793 3.36006 5.17781 3.66775 4.56684 4.2909 4.23044 5.11931 4.23044 6.00032 4.23044 6.88134 4.56684 7.70975 5.17781 8.3329 5.4793 8.64039 5.47988 9.13958 5.17879 9.44767 5.02824 9.60191 4.83049 9.67923 4.63295 9.67923z" fill="#666"></path><path d="M2.88814 12C2.69078 12 2.49363 11.9233 2.34308 11.7696C0.832119 10.2286 0 8.1796 0 6.00007C0 3.82035 0.832119 1.77135 2.34308 0.230318C2.64457 -0.0771708 3.13307 -0.0767722 3.43398 0.231514C3.73508 0.539601 3.73449 1.0386 3.433 1.34629C2.21417 2.5894 1.54274 4.24203 1.54274 5.99988C1.54274 7.75772 2.21417 9.41055 3.433 10.6537C3.73449 10.9614 3.73508 11.4603 3.43398 11.7686C3.28343 11.9229 3.08568 12 2.88814 12Z" fill="#666"></path></svg>
                                   </span>
                                   <span className="label">Online Streaming</span>
                               </div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom-line"></div>
                </div>
            }
        </div>)
};

export default TopSection;