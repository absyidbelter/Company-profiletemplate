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
  const text = [
    "UNIVERSITAS BRAWIJAYA MALANG",
    "PEMERINTAH KABUPATEN BLITAR",
    "PT. JAPFA COMFFED INDONESIA Tbk",
    "PT. MILENIUM MEGA MULIA",
    "PT. CIOMAS ADISATWA",
    "PT. SARIGUNA PRIMA TIRTA",
    "POLITEKNIK AKN BLITAR",
  ];

  return (
    <>
      <section style={{ marginTop: "-50px" }}>
        <div className="grid card-container">
          {images.map((image, index) => (
            <div key={index} className="row">
              <ItemSer src={image} text={text[index]} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ServiceCom;

