// Page where we enter to our Website

import React from "react";

function Landing_page() {
  return (
    <div className="landing_page">
      <div className="landing_header">
        <img src="./images/logo.svg" alt="logo" />
        <p>Login</p>
      </div>
      <div className="landing_middle">
        <img src="./images/logo.svg" alt="logo" />
        <a href="home">
          {" "}
          <button type="submit">Explore</button>
        </a>
        <p style={{ lineHeight: "1.2rem", textAlign: "center" }}>
          Get Premier Access to Raya and the last Dragon dor an additional fee
          with a Disney+ subscription. As of 09/17/2023,the price of disney+ and
          The Disney Bundle will increase by $1.
        </p>
      </div>
    </div>
  );
}
export default Landing_page;
