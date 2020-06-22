import React from 'react'
import './styles.css'

const Header = () =>
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
  </header>;

export default Header;
