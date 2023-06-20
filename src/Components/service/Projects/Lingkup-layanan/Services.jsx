import Card from "../card/Card";
import "../../../../Resources/css/lingkup-layanan.css";
import card1 from "../../../../Resources/img/card1.png"
import card2 from "../../../../Resources/img/card2.png"
import card3 from "../../../../Resources/img/card3.png"

function ServicesLingkup() {
  return (
    <div className="container services">
      <div className="card-cover text-center">
        <div className="col-md-12">
          <div className="row text-center">
            <div className="col-md-4 mb-2 ">
              <Card
                title="Gedung"
                png={card1}
                text="Konstruksi Bangunan Pendidikan Konstruksi Bangunan Gudang dan Industri"
              />
            </div>

            <div className="col-md-4 mb-2">
              <Card
                title="Bangunan Sipil"
                png={card2}
                text="Konstruksi Saluran Air, Dam, Pelabuhan dan Prasarana Sumber Daya Air Lainnya.Konstruksi Jalan Raya (Kecuali jalan layang), Jalan, Rel, Kereta Api dan Landas pacu bandara"
              />
            </div>
            <div className="col-md-4 mb-2">
              <Card
                title="Instalasi Elektrikal dan Mekanikal"
                png={card3}
                text="Konstruksi Instalasi Elektrikal Lainnya"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesLingkup;
