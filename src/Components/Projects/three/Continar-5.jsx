import one from "../../../Resources/img/05-one.jpeg";
import two from "../../../Resources/img/05-two.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarFive = () => {
  const images = [one, two];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​05-Pagar Tikus Kandang Ayam  </div>
        <div className="text-center">Japfa Comfeed Dampit</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]}  />
        <div className="text-center">​05-Pagar Tikus Kandang Ayam  </div>
        <div className="text-center">Japfa Comfeed Dampit</div>
      </div>
    </div>
  );
};

export default ContinarFive;
