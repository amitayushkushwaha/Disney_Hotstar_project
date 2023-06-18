// side_bar componet to display at home page
import React from "react";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="im_logo">
        <img src="./images/logo.svg" alt="logo" />
        <h1>hotstar</h1>
      </div>
      <div className="menu">
        <img src="./images/home-icon.svg" alt="home" />
      </div>
      <div className="menu">
        <img src="./images/original-icon.svg" alt="original" />
      </div>
      <div className="menu">
        <img src="./images/search-icon.svg" alt="search" />
      </div>

      <div className="menu">
        <img src="./images/series-icon.svg" alt="series" />
      </div>

      <div className="menu">
        <img src="./images/movie-icon.svg" alt="movie" />
      </div>
    </div>
  );
}
export default Sidebar;
