// line one and two for gallery
import one from "../../Resources/img/01-one.jpeg";
import two from "../../Resources/img/01-two.jpeg";
import three from "../../Resources/img/01-three.jpeg";
import four from "../../Resources/img/02-one.jpeg";
import five from "../../Resources/img/02-two.jpeg";
import six from "../../Resources/img/02-three.jpeg";
import "../../Resources/css/project.css";
import Item from "./Item";

const Continar = () => {
  const images = [one, two, three, four, five, six];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​01-Saluran Box Culvert </div>
        <div className="text-center">Universitas Brawijaya Malang </div>
        <Item src={images[3]} />
        <div className="text-center">​02-Kantin </div>
        <div className="text-center">Universitas Brawijaya Malang",</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]} />
        <div className="text-center">​Saluran Box Culvert </div>
        <div className="text-center">Universitas Brawijaya Malang </div>
        <Item src={images[4]} />
        <div className="text-center">​Kantin </div>
        <div className="text-center">Universitas Brawijaya Malang",</div>
      </div>
      <div className="row-reverse">
        <Item src={images[2]} />
        <div className="text-center">​Saluran Box Culvert </div>
        <div className="text-center">Universitas Brawijaya Malang </div>
        <Item src={images[5]} />
        <div className="text-center">​Kantin </div>
        <div className="text-center">Universitas Brawijaya Malang",</div>
      </div>
    </div>
  );
};

export default Continar;
