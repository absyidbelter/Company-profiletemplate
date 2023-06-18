import one from "../../../Resources/img/09-one.jpeg";
import two from "../../../Resources/img/09-two.jpeg";
import three from "../../../Resources/img/10-one.jpeg";
import four from "../../../Resources/img/10-two.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarNine = () => {
  const images = [one, two, three, four];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]}  />
        <div className="text-center">09-Kandang Single Japfa Comfeed  </div>
        <div className="text-center">Sale - Rembang</div>
        <Item src={images[2]} />
        <div className="text-center">10-Bangunan Fasum Kandang Japfa </div>
        <div className="text-center">Comfeed Sale - Rembang</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]} />
        <div className="text-center">Kandang Single Japfa Comfeed  </div>
        <div className="text-center">Sale - Rembang</div>
        <Item src={images[3]}/>
        <div className="text-center">Bangunan Fasum Kandang Japfa </div>
        <div className="text-center">Comfeed Sale - Rembang</div>
      </div>
    </div>
  );
};

export default ContinarNine;
