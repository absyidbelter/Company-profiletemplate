import one from "../../../Resources/img/13-one.jpg";
import two from "../../../Resources/img/13-two.jpg";
import three from "../../../Resources/img/14-one.jpeg";
import four from "../../../Resources/img/14-two.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarFour = () => {
  const images = [one, two, three, four];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]}  />
        <div className="text-center">
          13. Pek. Cut & Fill Japfa Comfeed Malang
        </div>
        <Item src={images[2]} />
        <div className="text-center">14. Pekerjaan Pagar Beton Panel Japfaa</div>
        <div className="text-center">Comfeed Dampit Malang</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]} />
        <div className="text-center">Pek. Cut & Fill Japfa Comfeed Malang</div>
        <Item src={images[3]}/>
        <div className="text-center">Pekerjaan Pagar Beton Panel Japfaa</div>
        <div className="text-center">Comfeed Dampit Malang</div>
      </div>
    </div>
  );
};

export default ContinarFour;
