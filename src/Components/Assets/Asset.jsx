import { useState } from "react";
import ContinarAs from "./ContinarOne";
import ContinarOne from "./ContinarOne";
// import ContinarAss from "./Continar";
// import ContinarTwo from "./ContinarTwo";
import PeralatanPDF from "../../Resources/pdf/Peralatan.pdf";
import "../../Resources/css/asset.css";
import ContinarTwo from "./Continar";
import Footer from "../Footer/Footer";

const AssetCom = () => {
  return (
    <>
      <section id="project">
        <h1
          style={{
            color: "black",
            textAlign: "left",
            paddingLeft: 80,
            paddingTop: 40,
          }}
        >
          Aset Pendukung
        </h1>
        <h3
          style={{
            color: "black",
            textAlign: "left",
            paddingLeft: 80,
            fontWeight: "normal",
            paddingBottom: 0,
          }}
        >
          Demi menjamin mutu yang berkualitas kami telah mempersiapkan aset yang
          menunjang dalam menyelesaikan pekerjaan.
        </h3>

        <section>
          <span className="green u-text-sup ">Kantor Kami</span> <ContinarOne />
        </section>
        <section>
          <span className="green u-text-sup">Workshop</span>
        </section>
        <ContinarTwo />
        <section></section>
        <span className="green u-text-sup">Peralatan</span>
        <section className="peralatan-section">
          <div className="peralatan-container">
            <embed
              src={`${PeralatanPDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
              width="100%"
              height="500"
              type="application/pdf"
              fullscreen="true"
            />
          </div>{" "}
        </section>
      </section>
      <section
        id="contactus"
        style={{
          backgroundColor: "#04aa6d",
          marginBottom: "-300px",
          marginLeft: "-900",
          marginRight: "-3000",
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
              <h5 style={{ color: "blanchedalmond", textAlign: "left" }}>
                {" "}
                Kontraktor Umum dan Perdagangan
              </h5>
              <div
                style={{
                  marginTop: "10px",
                  fontFamily: "Comic Sans MS",
                  fontWeight: "bold",
                  fontSize: "13px",
                  color: "black",
                  textAlign: "left",
                }}
              >
                {" "}
                bangunintinusa.com
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AssetCom;
