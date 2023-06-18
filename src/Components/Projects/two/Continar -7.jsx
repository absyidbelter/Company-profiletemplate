import three from "../../../Resources/img/07-one.jpeg";
import four from "../../../Resources/img/07-two.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarSeven = () => {
  const images = [three, four];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​07-Fasilitas Umum Jalan Beton </div>
        <div className="text-center">Japfa Comfeed Dampit </div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]} />
        <div className="text-center">​07-Fasilitas Umum Jalan Beton </div>
        <div className="text-center">Japfa Comfeed Dampit </div>
      </div>
    </div>
  );
};

export default ContinarSeven;
