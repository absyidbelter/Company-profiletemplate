import one from "../../../Resources/img/15-one.jpeg";
import two from "../../../Resources/img/15-two.jpeg";
import three from "../../../Resources/img/15-three.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarFifteen = () => {
  const images = [one, two, three ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​01-Kandang Doble Dack </div>
        <div className="text-center">Ciomas Adisatwa Kasri Malang</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]}  />
        <div className="text-center">​Kandang Doble Dack </div>
        <div className="text-center">Ciomas Adisatwa Kasri Malang</div>
      </div>
      <div className="row-reverse">
        <Item src={images[2]}  />
        <div className="text-center">​Kandang Doble Dack </div>
        <div className="text-center">Ciomas Adisatwa Kasri Malang</div>
      </div>
    </div>
  );
};

export default ContinarFifteen;
