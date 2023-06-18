import one from "../../../Resources/img/06-one.jpeg";
import "../../../Resources/css/project.css";
import Item from "../Item";

const ContinarSix = () => {
  const images = [one];
  return (
    <div className="grid card-container">
      <div className="row-reverse">
        <Item src={images[0]} />
        <div className="text-center">06-Bangunan Mes Karyawan </div>
        <div className="text-center">Japfa Comfeed Dampit</div>
      </div>
    </div>
  );
};

export default ContinarSix;
