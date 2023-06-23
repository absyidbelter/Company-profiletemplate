import React from "react";
import logo from "../../Resources/img/logo.png";

const FooterAsset = () => {
  return (
    <section
      id="contactus"
      style={{
        backgroundColor: "#04aa6d",
        marginBottom: "-300px",
        marginLeft: "-20px",
        marginRight: "-40px",
        alignContent: "center",
      }}
    >
      <div
        className="item w-40"
        style={{ marginBottom: "40px", marginLeft: "40px" }}
      >
        <div className="contact-info mt-30 flex">
          <div className="item w-100">
            <h1 style={{ color: "black", textAlign: "left" }}>
              PT BANGUN INTI NUSA
            </h1>
            <h5
              style={{
                color: "blanchedalmond",
                textAlign: "left",
                marginTop: "-12px",
              }}
            >
              {" "}
              Kontraktor Umum dan Perdagangan
            </h5>
            <div
              className="footer-mob"
              style={{
                marginTop: "5px",
                fontFamily: "Comic Sans MS",
                fontWeight: "bold",
                fontSize: "18px",
                color: "black",
                textAlign: "left",
                // marginLeft: "10px",
              }}
            >
              {" "}
              bangunintinusa.com
            </div>
            <div
              className="footer-mobs"
            >
              Site powered by{" "}
              <a
                href="https://api.whatsapp.com/send?phone=6285161836960"
                target="_blank"
              >
                ConsoleLog
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterAsset;
