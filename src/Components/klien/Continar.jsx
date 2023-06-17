import one from "../../Resources/img/logo3.jpeg";
import two from "../../Resources/img/logo4.jpeg";
import three from "../../Resources/img/logo5.jpeg";
import four from "../../Resources/img/logo6.jpeg";
import five from "../../Resources/img/logo1.jpeg";
import six from "../../Resources/img/logo2.jpeg";
import seven from "../../Resources/img/logo7.jpeg";
import "../../Resources/css/service.css";
import ItemClient from "./Item";

const ContinarClient = () => {
  const images = [one, two, three, four, five, six, seven];
  const texts = [
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
  ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <ItemClient src={images[0]} text={texts[0]} />
        <ItemClient src={images[3]} text={texts[3]} />
      </div>
      <div className="row-reverse">
        <ItemClient src={images[1]} text={texts[1]} />
        <ItemClient src={images[4]} text={texts[4]} />
      </div>
      <div className="row-reverse">
        <ItemClient src={images[2]} text={texts[2]} />
        <ItemClient src={images[5]} text={texts[5]} />
      </div>
      <div className="row-reverse">
        <ItemClient src={images[6]} text={texts[6]} />
      </div>
    </div>
  );
};

export default ContinarClient;
