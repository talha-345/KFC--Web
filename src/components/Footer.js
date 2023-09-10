import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container-1">
        <div className="footer-text">
          <h6>About Us</h6>
          <h6>Contact Us</h6>
          <h6>Privacy Policy</h6>
          <h6>Careers</h6>
          <h6>Track Order</h6>
          <h6>Store Location</h6>
          <h7>2023 KFC. All right deserved</h7>
        </div>

        <div className="footer-svg">
          <div>
            <img
              className="footer-img"
              src="https://seeklogo.com/images/K/kfc-logo-81CF66A86D-seeklogo.com.png"
              alt="kfc-footer"
            />
          </div>

          <div className="footer-spons">
            <h7>Powered by</h7>
            <a href="https://simplexts.net/" target="_blank">
              SimpleX Technology Solutions
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
