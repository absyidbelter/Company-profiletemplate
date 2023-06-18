import { useState } from "react";
import "../../Resources/css/project.css";
import Continar from "../Projects/Continar";
import ContinarFour from "./four/Continar";
import ContinarTwelve from "./three/Continar-12";
import ContinarEleven from "./one/Continar -13";
import ContinarNine from "./four/Continar -09";
import ContinarSeven from "./two/Continar -7";
import ContinarSix from "./one/Continar -6";
import ContinarFive from "./three/Continar-5";
import ContinarFours from "./three/Continar-4";
import ContinarThree from "./three/Continar-3";
import ContinarEight from "./three/Continar-8";
import ContinarFifteen from "./three/15-Continar copy";

const ProjectCom = () => {
  return (
    <section id="project">
      <div>
        <span className="green u-text-sup">Galeri Proyek</span>
      </div>
      <div style={{ marginTop: "70px" }}>
        <section>
          <h1>Pekerjaan Proyek Tahun 2019</h1>
        </section>
        <Continar />
        <ContinarThree />
        <ContinarFours />
        <ContinarFive />
        <ContinarSix />
        <ContinarSeven />
        <ContinarEight />
        <ContinarNine />
        <ContinarEleven />
        <ContinarTwelve />
        <ContinarFour />
        <section>
          <h1>Pekerjaan Proyek Tahun 2020</h1>
        </section>
        <ContinarFifteen/>
      </div>
    </section>
  );
};

export default ProjectCom;
