import { useState } from "react";
import one from "../../../Resources/img/logo1.jpeg";
import two from "../../../Resources/img/logo2.jpeg";
import three from "../../../Resources/img/logo3.jpeg";
import four from "../../../Resources/img/logo4.jpeg";
import five from "../../../Resources/img/logo5.jpeg";
import seven from "../../../Resources/img/logo7.jpeg";
import six from "../../../Resources/img/logo6.jpeg";
import ItemSer from "./ItemOne";

const ServiceCom = () => {
  const images = [three, four, six, one, five, two, seven];

  return (
    <>
      <section style={{marginTop: "-50px"}}>
        <div className="grid card-container">
          <div className="row">
            <ItemSer src={images[0]} text="​UNIVERSITAS BRAWIJAYA MALANG" />
            <ItemSer src={images[1]} text="PEMERINTAH KABUPATEN BLITAR" />
            <ItemSer src={images[2]} text="PT. JAPFA COMFFED INDONESIA Tbk" />
            <ItemSer src={images[3]} text="PT. MILENIUM MEGA MULIA" />
          </div>
          <div className="row">
            <ItemSer src={images[4]} text="PT. CIOMAS ADISATWA" />
            <ItemSer src={images[5]} text="PT. SARIGUNA PRIMA TIRTA" />
            <ItemSer src={images[6]} text="POLITEKNIK AKN BLITAR" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceCom;
