import { useState } from "react";
import four from "../../Resources/img/AP_5.jpeg";
import five from "../../Resources/img/AP_6.jpeg";
import six from "../../Resources/img/AP_7.jpeg";
import ItemAss from "./Item";
import "../../Resources/css/asset.css";

const ContinarTwo = () => {
  const images = [four, five, six];

  return (
    <div className="flex project pt-30 text-center">
      {images.map((src, index) => (
        <ItemAss key={index} src={src} /> 
      ))}
    </div>
  );
};

export default ContinarTwo;