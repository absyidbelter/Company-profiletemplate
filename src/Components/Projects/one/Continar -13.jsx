import one from "../../../Resources/img/11-one.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarEleven = () => {
  const images = [one];
  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">​11-Bangunan Mes Karyawan Japfa Comfeed</div>
        <div className="text-center">Sale Rembang</div>
      </div>
    </div>
  );
};

export default ContinarEleven;
