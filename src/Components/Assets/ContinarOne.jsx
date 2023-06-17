import { useState } from "react";
import { Item } from "..";
import one from "../../Resources/img/AP_1.jpg";
import ItemOne from "./ItemOne";
import "../../Resources/css/asset.css";

const ContinarOne = () => {
  const images = [one];

  return (
    <div className="flex project pt-30 text-center">
      {images.map((src, index) => (
        <ItemOne key={index} src={src} /> 
      ))}
    </div>
  );
};

export default ContinarOne;