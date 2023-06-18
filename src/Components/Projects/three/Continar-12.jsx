// line one and two for gallery
import two from "../../../Resources/img/12-two.jpeg";
import three from "../../../Resources/img/12-three.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarTwelve = () => {
  const images = [two, three ];

  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​12-Fasilitas Saluran Japfa Comfeed</div>
        <div className="text-center">Dampit Malang</div>
      </div>
      <div className="row-reverse">
        <Item src={images[1]}  />
        <div className="text-center">​12-Fasilitas Saluran Japfa Comfeed </div>
        <div className="text-center">Dampit Malang</div>
      </div>
    </div>
  );
};

export default ContinarTwelve;
