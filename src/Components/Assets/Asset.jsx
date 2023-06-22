import { useState } from "react";
import ContinarAs from "./ContinarOne";
import ContinarOne from "./ContinarOne";
import PeralatanPDF from "../../Resources/pdf/Peralatan.pdf";
import "../../Resources/css/asset.css";
import ContinarTwo from "./Continar";
import Footer from "../Footer/Footer";

const AssetCom = () => {
  return (
    <>
      <section id="project">
        <h3
          style={{
            color: "black",
            textAlign: "left",
            paddingLeft: 80,
            fontWeight: "normal",
            paddingBottom: 0,
            paddingTop: 40
          }}
          className="asset-h3"
        >
          Demi menjamin mutu yang berkualitas kami telah mempersiapkan aset yang
          menunjang dalam menyelesaikan pekerjaan.
        </h3>

        <section>
          <span className="green u-text-sup " style={{marginTop: "-60px"}}>Kantor Kami</span> <ContinarOne />
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
        <Footer/>
      </section>
      
    </>
  );
};

export default AssetCom;
