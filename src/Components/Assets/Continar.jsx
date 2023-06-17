import { Item } from "../../Components";
import one from "../../Resources/img/AP_1.jpg";
import two from "../../Resources/img/AP_3.jpeg";
import three from "../../Resources/img//AP_4.jpeg";
import four from "../../Resources/img//AP_5.jpeg";
import five from "../../Resources/img/AP_6.jpeg";
import six from "../../Resources/img/AP_7.jpeg";
import "../../Resources/css/project.css";
import ItemTwo from "./Item";

const ContinarTwo = () => {
  const images = [one, two, three, four, five, six];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <ItemTwo src={images[0]} />
        <ItemTwo src={images[3]} />
      </div>
      <div className="row-reverse">
        <ItemTwo src={images[1]} />
        <ItemTwo src={images[4]} />
      </div>
      <div className="row-reverse">
        <ItemTwo src={images[2]} />
        <ItemTwo src={images[5]} />
      </div>
    </div>
  );
};

export default ContinarTwo;
