import { useState } from "react";
import { Continar } from "..";
import "../../Resources/css/project.css";

const ClientCom = () => {
  return (
    <section id="project">
      <div>
        <span className="green u-text-sup">Galeri Proyek</span>
      </div>
      <div style={{ marginTop: "70px" }}> 
        <Continar />
      </div>
    </section>
  );
};

export default ClientCom;
