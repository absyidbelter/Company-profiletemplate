import React from "react";
import logo from "../../Resources/img/logo.png";

const Footer = () => {
  return (
    <section
      id="contactus"
      style={{
        backgroundColor: "#04aa6d",
        marginBottom: "-300px",
        marginLeft: "-2000",
        marginRight: "-200",
      }}
    >
      <div
        className="item w-40"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <div className="contact-info mt-30 flex">
          <div className="item w-100">
            <h1>PT BANGUN INTI NUSA</h1>
            <h5 style={{ color: "blanchedalmond" }}>
              {" "}
              Kontraktor Umum dan Perdagangan
            </h5>
            <div
              style={{
                marginTop: "10px",
                fontFamily: "Comic Sans MS",
                fontWeight: "bold",
                fontSize: "13px",
              }}
            >
              {" "}
              bangunintinusa.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
