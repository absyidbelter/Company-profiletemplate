import React from "react";
import logo from "../../Resources/img/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="text">
        <p>BANGUNINTINUSA.COM</p>
      </div>
    </footer>
  );
};

export default Footer;
