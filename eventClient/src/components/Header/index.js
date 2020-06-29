import React from 'react'
import './styles.css'
// import StickyHeader from '../StickyHeader'

const Header = () =>
  <div>
    <header className="header">
      <div className="navbar navbar-expand-sm main-header">
        <div className="row sub-div">
          <h1 className="col-2 header-title">BookEventz</h1>
          <div className="col-5">
            <span className="search-icon glyphicon glyphicon-search"></span>
            <input className="search-box" placeholder="Search for Events" />
          </div>
          <div className="col-5"></div>
        </div>
      </div>
      <div className="sub-header row">
        <div className="rigth-sub-header col-6">
          <a>Movies</a>
          <a>Events</a>
          <a>Plays</a>
          <a>Sports</a>
          <a>Activities</a>
          <a>Monuments</a>
          <a>Fanhood</a>
          <a>Buzz</a>
        </div>
        <div className="col-2"></div>
        <div className="left-sub-header col-4">
          <a>ListYourShows</a>
          <a>Corporates</a>
          <a>Offers</a>
          <a>Gift Cards</a>
        </div>
      </div>
    </header>
    {/* <header className="header-mobile">
      <span><svg className="back-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 18" id="titlebar-back"><path fill-rule="evenodd" d="M9.38 0L0 9l9.38 9 1.76-1.7L3.54 9l7.6-7.3"></path></svg></span>
      <p>

      </p>
      <span><svg className="share-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="share-new"><g fill="#FFF"><path d="M17 6.4a4.3 4.3 0 0 0 5.7 0c.4-.3.7-.7 1-1.2a3.5 3.5 0 0 0 0-2.9l-1-1.2a4.3 4.3 0 0 0-5.7 0l-.8 1.2a3.5 3.5 0 0 0-.2 2.5L7.1 9.5a4 4 0 0 0-1.4-1 4.3 4.3 0 0 0-4.5.9l-.8 1.1a3.5 3.5 0 0 0 0 3l.8 1.2 1.3.8a4.3 4.3 0 0 0 4.6-1l8.9 4.7a3.5 3.5 0 0 0 .2 2.5l.8 1.2 1.3.8a4.3 4.3 0 0 0 4.4-.8l1-1.2a3.5 3.5 0 0 0 0-3l-1-1.1a4.3 4.3 0 0 0-5.8 0L8 13A3.5 3.5 0 0 0 8 11l9-4.7zm1.7 12.2c.3-.2.8-.4 1.2-.4 1.2 0 2.1 1 2.1 2 0 1.1-1 2-2.1 2-1.2 0-2.1-.9-2.1-2a2 2 0 0 1 1-1.6zM4.1 14C2.9 14 2 13 2 12c0-1 1-2 2.1-2 .5 0 1 .2 1.3.5.5.3.8.9.8 1.5a2 2 0 0 1-.8 1.6c-.3.2-.8.4-1.3.4zM17.8 3.8c0-1.1 1-2 2-2 1.3 0 2.2.9 2.2 2 0 1-1 2-2.1 2-.4 0-.8-.2-1.2-.4a2 2 0 0 1-1-1.6z"></path><path d="M19.9 24a4.3 4.3 0 0 1-2.9-1.1l-.9-1.2a3.5 3.5 0 0 1-.1-2.5l-8.8-4.7a4 4 0 0 1-1.5 1 4.3 4.3 0 0 1-4.5-.8c-.4-.4-.6-.8-.8-1.2a3.5 3.5 0 0 1 0-3c.2-.4.4-.8.8-1.2a4.3 4.3 0 0 1 6 .2L16 4.8a3.5 3.5 0 0 1 .1-2.5c.2-.4.5-.8 1-1.2a4.3 4.3 0 0 1 5.8 0l.7 1.2a3.5 3.5 0 0 1 0 3l-.8 1.1a4.3 4.3 0 0 1-5.8 0L8 11A3.5 3.5 0 0 1 8 13l9 4.7a4 4 0 0 1 1.3-.9 4.3 4.3 0 0 1 4.5.8l.8 1.2a3.5 3.5 0 0 1 0 3l-.8 1.2a4.3 4.3 0 0 1-2.9 1.1zM7 14.4l9 4.8a3.5 3.5 0 0 0 0 2.5l1 1.2c.3.3.7.6 1.2.8a4.3 4.3 0 0 0 4.4-.8l.9-1.2a3.5 3.5 0 0 0 0-3c-.2-.4-.5-.8-.9-1.1a4.3 4.3 0 0 0-5.8 0L8 13A3.5 3.5 0 0 0 8 11l9-4.8a4.1 4.1 0 0 0 2.9 1.2 4.3 4.3 0 0 0 2.8-1c.4-.4.7-.8.9-1.3a3.5 3.5 0 0 0 0-2.9l-.9-1.2a4.3 4.3 0 0 0-5.7 0l-.8 1.2a3.5 3.5 0 0 0-.2 2.5L7.1 9.6a4 4 0 0 0-1.4-1 4.3 4.3 0 0 0-4.4.8c-.4.3-.7.7-1 1.2a3.5 3.5 0 0 0 0 2.9l1 1.1c.3.4.8.7 1.2.8a4.3 4.3 0 0 0 4.6-1zM20 22.2c-1.2 0-2.2-.9-2.2-2a2 2 0 0 1 1-1.6c.4-.3.8-.4 1.2-.4 1.2 0 2.1 1 2.1 2 0 1.1-1 2-2.1 2zm0-4c-.4 0-.8.2-1.2.4a2 2 0 0 0-1 1.6c0 1 1 2 2.2 2 1.2 0 2.1-1 2.1-2s-1-2-2.1-2zM4 14c-1.2 0-2.2-.9-2.2-2 0-1 1-2 2.2-2 .5 0 1 .2 1.3.4.6.4.9 1 .9 1.6a2 2 0 0 1-.9 1.6c-.3.3-.8.4-1.3.4zm0-4C2.9 10 2 11 2 12s1 2 2.1 2c.5 0 1-.2 1.3-.5.5-.3.8-.9.8-1.5s-.3-1.2-.8-1.5c-.4-.3-.8-.4-1.3-.4zm15.8-4.2c-.4 0-.8-.1-1.2-.4a2 2 0 0 1-1-1.6c0-1.1 1-2 2.2-2 1.2 0 2.1.9 2.1 2 0 1-1 2-2.1 2zm0-4c-1.2 0-2.1.9-2.1 2a2 2 0 0 0 1 1.6c.3.2.7.3 1 .3 1.3 0 2.2-.8 2.2-2 0-1-1-1.9-2.1-1.9z"></path></g></svg></span>
    </header> */}
    {/* <StickyHeader/> */}
  </div>;

export default Header;
