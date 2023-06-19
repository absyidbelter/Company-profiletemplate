import { NavLink, useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faMap,
  faFax,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { About, Project, Contact, ServiceCom } from "../Components";
import logo from "../Resources/img/logo.png";
import "../Resources/css/home.css";
import JasaLayanan from "../Components/service/Projects/home";

const Home = () => {
  let Navigate = useNavigate();
  let ContactHandle = () => {
    Navigate("/kontak");
  };

  let AboutHandle = () => {
    Navigate("/tentang-kami");
  };

  
  return (
    <>
      <div className="main-cover">
        <div className="overllay">
          <div className="Cover-content">
            <h1 style={{ whiteSpace: "nowrap" }}>PT. BANGUN IN​TI NUSA </h1>
            <h4>Kontraktor Umum &amp; Perdagangan</h4>
            <h2>"Memberikan mutu dan pelayanan terbaik"</h2>
            <a onClick={ContactHandle}>Kontak Kami</a>
          </div>
        </div>
      </div>
      <section id="about">
        <div
          className="about flex main-container"
          style={{ marginTop: "80px", marginBottom: "80px" }}
        >
          <div className="item">
            <img src={logo} alt="" />
          </div>
          <div className="item" style={{ marginTop: "30px" }}>
            <div className="flex">
              <div>
                <span className="green u-text-sup">Tentang Kami</span>
                <p>
                  PT. BANGUN INTI NUSA merupakan salah satu perusahaan yang
                  bergerak dibidang jasa konstruksi swasta nasional yang
                  didirikan di kota Blitar pada tanggal 2 Januari 2019 sebagai
                  langkah usaha untuk mengisi pembangunan bangsa dan negara.
                </p>
                <a onClick={AboutHandle} className="green-btn">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="clients" style={{ backgroundColor: "#F8F8FF" }}>
        <div style={{ marginTop: "50px", marginBottom: "80px" }}>
          <div>
            <span
              className="green u-text-sup text-center"
              style={{ fontSize: "24px", marginBottom: "1px" }}
            >
              Lingkup Bidang Layanan
            </span>
            <p className="text-center" style={{ marginBottom: "50px", color: "black"}}>
              Berdasarkan kualifikasi yang dimiliki PT. Bangun Inti Nusa dapat
              memberikan layanan jasa yaitu
            </p>
          </div>
          <JasaLayanan />
        </div>
      </section>
      
      <section>
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
          <div>
            <span className="green u-text-sup text-center" style={{ fontSize: "24px" }}>
              Klien Kami
            </span>
            <p className="text-center">
              Kami telah menyelesaikan berbagai proyek dengan klien kami sebagai
              berikut:{" "}
            </p>
          </div>
          <ServiceCom />
        </div>
      </section>
      <section
        id="contactus"
        style={{ backgroundColor: "#04aa6d", marginBottom: "-300px" }}
      >
        <div
          className="item w-40"
          style={{ marginBottom: "40px", marginLeft: "40px" }}
        >
          <div className="contact-info mt-30 flex">
            <div className="item w-100">
              <h1 >PT BANGUN INTI NUSA</h1>
              <h5 style={{color:"blanchedalmond"}}> Kontraktor Umum dan Perdagangan</h5>
              <div className="contact-text-home">
                <i className="icon">
                  <FontAwesomeIcon icon={faPhone} size="sm" />
                </i>{" "}
                <span>
                  <a href="tel:081249450891">081249450891</a> atau{" "}
                  <a href="tel:085106634133">085106634133</a>
                </span>
              </div>
            </div>
            <div className="item w-100">
              <div className="contact-text-home">
                <i className="icon">
                  <FontAwesomeIcon icon={faEnvelope} size="sm" />
                </i>{" "}
                <a href="mailto:pt.bangunintinusa@gmail.com" >
                  pt.bangunintinusa@gmail.com
                </a>
              </div>
            </div>
            <div className="item w-100">
              <div className="contact-text-home">
                <i className="icon">
                  <FontAwesomeIcon icon={faMap} size="sm" />
                </i>{" "}
                <span style={{marginRight: "-150px"}}> 
                  Perum. Bengawan Solo Regency Block C - No. 01 Kota Blitar, Jawa Timur 
                </span>
              </div>
            </div>
            <div className="item w-100">
              <div className="contact-text-home">
                <i className="icon">
                  <FontAwesomeIcon icon={faFax} size="sm" />
                </i>{" "}
                03428180890
              </div>
            </div>
            <div style={{marginTop:"10px", fontFamily:"Comic Sans MS", fontWeight:"bold", fontSize:"20px"}}> bangunintinusa.com</div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
