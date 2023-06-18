import one from "../../../Resources/img/03-one.jpeg";
import two from "../../../Resources/img/03-two.jpeg";
import three from "../../../Resources/img/04-three.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarThree = () => {
  const images = [one, two, three ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​04-Fasilitas Bangunan Japfa  </div>
        <div className="text-center">Comfeed Dampit</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]}  />
        <div className="text-center">​Fasilitas Bangunan Japfa  </div>
        <div className="text-center">Comfeed Dampit</div>
      </div>
      <div className="row-reverse">
        <Item src={images[2]}  />
        <div className="text-center">​Fasilitas Bangunan Japfa  </div>
        <div className="text-center">Comfeed Dampit</div>
      </div>
    </div>
  );
};

export default ContinarThree;
