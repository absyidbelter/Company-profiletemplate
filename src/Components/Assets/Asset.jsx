import { useState } from "react";
import ContinarAs from "./ContinarOne";
import ContinarOne from "./ContinarOne";
// import ContinarAss from "./Continar";
// import ContinarTwo from "./ContinarTwo";
import PeralatanPDF from "../../Resources/pdf/Peralatan.pdf";
import "../../Resources/css/asset.css";
import ContinarTwo from "./Continar";

const AssetCom = () => {
  return (
    <section id="project">
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
  );
};

export default AssetCom;
