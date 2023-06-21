import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";

import "./Footer.scss";

import Payment from "../../assets/payments.png";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat
            officia nisi in, voluptas fugit porro rerum velit molestias nam
            deserunt aut nesciunt eveniet praesentium assumenda eligendi
            reprehenderit? Ipsam, deleniti rem.
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              Ithumb Tower A, Office 110, Noida Utter Pradesh
            </div>
          </div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 8954252256</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: admin@xyz.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Headphones</span>
          <span className="text">Smart Watches</span>
          <span className="text">Bluetooth Speakers</span>
          <span className="text">Wireless Earbuds</span>
          <span className="text">Home Theatre</span>
          <span className="text">Projectors</span>
        </div>
        <div className="col">
          <div className="title">Pages</div>
          <span className="text">Home</span>
          <span className="text">About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Returns</span>
          <span className="text">Terms and Conditions</span>
          <span className="text">Contact Us</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">2023 Store all right reserved.</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
