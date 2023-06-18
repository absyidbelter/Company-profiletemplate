import three from "../../../Resources/img/13-one.jpg";
import four from "../../../Resources/img/13-two.jpg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarThirteen = () => {
  const images = [three, four];
  const texts = [
    "13. Pek. Cut & Fill  Japfa Comfeed Malang",
    "13. Pek. Cut & Fill  Japfa Comfeed Malang",
  ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <div>"13. Pek. Cut & Fill  Japfa Comfeed Malang",</div>
        <Item src={images[0]} text={texts[0]} />
      </div>
      <div className="row-reverse">
        <Item src={images[1]} text={texts[1]} />
      </div>
    </div>
  );
};

export default ContinarThirteen
