// line one and two for gallery

import { Item } from "../../Components";
import one from "../../Resources/img/01-one.jpeg";
import two from "../../Resources/img/01-two.jpeg";
import three from "../../Resources/img/01-three.jpeg";
import four from "../../Resources/img/02-one.jpeg";
import five from "../../Resources/img/02-two.jpeg";
import six from "../../Resources/img/02-three.jpeg";
import "../../Resources/css/project.css";

const Continar = () => {
  const images = [one, two, three, four, five, six];
  const texts = [
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "01-Saluran Box Culvert Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
    "​02-Kantin Universitas Brawijaya Malang",
  ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} text={texts[0]} />
        <Item src={images[3]} text={texts[3]} />
      </div>
      <div className="row-reverse">
        <Item src={images[1]} text={texts[1]} />
        <Item src={images[4]} text={texts[4]} />
      </div>
      <div className="row-reverse">
        <Item src={images[2]} text={texts[2]} />
        <Item src={images[5]} text={texts[5]} />
      </div>
    </div>
  );
};

export default Continar;
