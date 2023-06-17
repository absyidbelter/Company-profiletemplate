import "../../Resources/css/service.css";
import ContinarClient from "./Continar";

const ClientCom = () => {
  return (
    <section id="project">
      <div>
        <span className="green u-text-sup">Galeri Proyek</span>
      </div>
      <div style={{ marginTop: "70px" }}> 
        <ContinarClient />
      </div>
    </section>
  );
};

export default ClientCom;
