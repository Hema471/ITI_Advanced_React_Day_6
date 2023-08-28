import "../Css/Footer.css";
import React from "react";

export default function Footer() {
  return (
    <footer className="m-3">
      <div className="container ">
        <br />
        <div className="row  d-flex align-items-center">
          <div className="col ">
            <h5>GET IN TOUCH</h5>
            <br />
            <p>
              <i className="fas fa-home "></i> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope "></i>
              info@example.com
            </p>
            <p>
              <i className="fas fa-phone "></i> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print "></i> + 01 234 567 89
            </p>
          </div>

          {/* 
Contact Me */}

          <button className="My2 col align-self-center">CONTACT ME</button>
          <div className="col d-flex flex-row justify-content-end align-items-center">
            <i className="fab fa-linkedin" style={{ margin: "10px" }}></i>
            <i className="fab fa-facebook" style={{ margin: "10px" }}></i>
            <i className="fab fa-twitter" style={{ margin: "10px" }}></i>
          </div>
          <div
              className="text-end p-3"
              style={{ backgroundColor: "rgba(0, 0, 0, 0.2)"}}
            >
              Copyright: &copy; {new Date().getFullYear()}
            </div>
        </div>
      </div>
    </footer>
  );
}
