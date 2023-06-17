import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { About, Project, Contact, ServiceCom } from "../Components";
import logo from "../Resources/img/AP_1.jpg";
import "../Resources/css/home.css";
import JasaLayanan from "../Components/service/Projects/home";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  let Navigate = useNavigate();
  let AboutHandle = () => {
    Navigate("/about");
  };

  return (
    <>
      <div className="main-cover">
        <div className="overllay">
          <div className="Cover-content">
            <h1 style={{ whiteSpace: "nowrap" }}>PT. BANGUN IN​TI NUSA </h1>
            <h4>Kontraktor Umum & Perdagangan</h4>
            <h2>"Memberikan mutu dan pelayanan terbaik"</h2>
            <a onClick={AboutHandle}>about us</a>
          </div>
        </div>
      </div>
      <section id="about">
        <div className="about flex main-container">
          <div className="item">
            <img src={logo} alt="" />
          </div>
          <div className="item pt-30">
            <span className="green u-text-sup">Tentang Kami</span>
            <p>
              PT. BANGUN INTI NUSA merupakan salah satu perusahaan yang bergerak
              dibidang jasa konstruksi swasta nasional yang didirikan di kota
              Blitar pada tanggal 2 Januari 2019 sebagai langkah usaha untuk
              mengisi pembangunan bangsa dan negara.
            </p>
            <div>
              <a onClick={AboutHandle} className="green-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section id="clients">
        <div>
          <span
            className="green u-text-sup text-center"
            style={{ fontSize: "24px" }}
          >
            Lingkup Bidang Layanan
          </span>

          <p className="text-center">
            Berdasarkan kualifikasi yang dimiliki PT. Bangun Inti Nusa dapat
            memberikan layanan jasa yaitu
          </p>
        </div>
        <JasaLayanan />
      </section>
      <Footer className="no-margin" />
      <footer className="no-margin"></footer>
    </>
  );
};

export default Home;
