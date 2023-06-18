import one from "../../../Resources/img/08-one.jpeg";
import two from "../../../Resources/img/08-two.jpeg";
import three from "../../../Resources/img/08-three.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarEight = () => {
  const images = [one, two, three ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">08-Fasilitas Umum Jalan Aspal </div>
        <div className="text-center">Hotmix Japfa Comfeed Dampit</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]}  />
        <div className="text-center">Fasilitas Umum Jalan Aspal </div>
        <div className="text-center">Hotmix Japfa Comfeed Dampit</div>
      </div>
      <div className="row-reverse">
        <Item src={images[2]}  />
        <div className="text-center">Fasilitas Umum Jalan Aspal </div>
        <div className="text-center">Hotmix Japfa Comfeed Dampit</div>
      </div>
    </div>
  );
};

export default ContinarEight;
