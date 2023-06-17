import { useState } from "react";
import one from "../../Resources/img/AP_3.jpeg";
import two from "../../Resources/img/AP_4.jpeg";
import three from "../../Resources/img/AP_5.jpeg";
import ItemAss from "./Item";
import "../../Resources/css/asset.css";

const ContinarAss = () => {
  const images = [one, two, three];

  return (
    <div className="flex project pt-30 text-center">
      {images.map((src, index) => (
        <ItemAss key={index} src={src} />
      ))}
    </div>
  );
};

export default ContinarAss;
