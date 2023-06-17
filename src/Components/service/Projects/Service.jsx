import { useState } from "react";
import one from "../../../Resources/img/logo1.jpeg";
import two from "../../../Resources/img/logo2.jpeg";
import three from "../../../Resources/img/logo3.jpeg";
import four from "../../../Resources/img/logo4.jpeg";
import five from "../../../Resources/img/logo5.jpeg";
import seven from "../../../Resources/img/logo7.jpeg";
import six from "../../../Resources/img/logo6.jpeg";

const ServiceCom = () => {
  const imagesSet1 = [three, four, six, one, five, two, seven];
  // const imagesSet2 = [two, seven];

  return (
    <div className="text-center">
      <div className="service-container">
        {imagesSet1.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="service-image" />
        ))}
      </div>
      {/* <div className="service-container">
        {imagesSet2.map((image, index) => (
          <img key={index} src={image} alt={`Image ${index + 1}`} className="service-image" />
        ))}
      </div> */}
    </div>
  );
};

export default ServiceCom;
