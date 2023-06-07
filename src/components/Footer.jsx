// Footer page component
import React from "react";
function Footer() {
  return (
    <div className="footer">
      <div>
        <h3>Company</h3>
        <p>About Us</p>
        <p>Careers</p>
        <p>@ 2023 STAR. All rights Reserved.</p>
        <p>Terms Of Use Privacy Policy FAQ</p>
      </div>
      <div>
        <h3>View Website in</h3>
        <p>English</p>
      </div>
      <div>
        <h3>Need Help?</h3>
        <p>Visit Hepl Center</p>
        <p>Give Feedback</p>
      </div>
      <div>
        <h3>Connect With Us</h3>
        <img
          src="./images/f2.png"
          alt="facebook"
          style={{
            backgroundColor: "white",
            borderRadius: "100px",
            marginRight: "10px",
          }}
        />
        <img
          src="./images/twitter.png"
          alt="twitter"
          style={{ backgroundColor: "white", borderRadius: "7rem" }}
        />
      </div>
    </div>
  );
}
export default Footer;
