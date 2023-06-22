import { NavLink, useNavigate } from "react-router-dom";
import {
  faEnvelope,
  faMap,
  faFax,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ServiceCom } from "../Components";
import icon1 from "../Resources/img/whatsapp.png";
import icon2 from "../Resources/img/email.png";
import "../Resources/css/home.css";
import AboutSection from "../Components/About-home/about-sec";
import ServicesLingkup from "../Components/service/Projects/Lingkup-layanan/Services";

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
            <div className="social-icon" style={{ marginTop: "-18px" }}>
              <a
                href="mailto:pt.bangunintinusa@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={icon2} alt="Icon" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=081249450891"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginLeft: "-170px" }}
              >
                <img src={icon1} alt="Icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <section id="about">
        <AboutSection />
      </section>
      <section id="clients" className="client-background">
        <div style={{ marginTop: "50px", marginBottom: "80px" }}>
          <div>
            <span
              className="green u-text-sup text-center"
              style={{ fontSize: "24px", marginBottom: "1px" }}
            >
              Lingkup Bidang Layanan
            </span>
            <p
              className="text-center"
              style={{ marginBottom: "50px", color: "black" }}
            >
              Berdasarkan kualifikasi yang dimiliki PT. Bangun Inti Nusa dapat
              memberikan layanan jasa yaitu
            </p>
          </div>
          <ServicesLingkup />
        </div>
      </section>

      <section>
        <div style={{ marginTop: "60px", marginBottom: "60px" }}>
          <div>
            <span
              className="green u-text-sup text-center"
              style={{ fontSize: "24px" }}
            >
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
        <div className="flex main-container">
          <div className="item w-60">
            <div className="contact-info mt-30">
              <div className="item w-100">
                <h1>PT BANGUN INTI NUSA</h1>
                <h5 style={{ color: "blanchedalmond" }}>
                  {" "}
                  Kontraktor Umum dan Perdagangan
                </h5>
                <div className="contact-text-home">
                  <i className="icon">
                    <FontAwesomeIcon icon={faPhone} size="sm" />
                  </i>{" "}
                  <span>
                    <a href="tel:081249450891">081249450891</a> atau{" "}
                    <a href="tel:085106634133">085106634133</a>
                  </span>
                </div>
                <div className="contact-text-home">
                  <i className="icon">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  </i>{" "}
                  <a href="mailto:pt.bangunintinusa@gmail.com">
                    pt.bangunintinusa@gmail.com
                  </a>
                </div>
                <div className="contact-text-home">
                  <i className="icon">
                    <FontAwesomeIcon icon={faMap} size="sm" />
                  </i>{" "}
                  <span className="address">
                    Perum. Bengawan Solo Regency Block C - No. 01 Kota Blitar,
                    Jawa Timur
                  </span>
                </div>
                <div className="contact-text-home">
                  <i className="icon">
                    <FontAwesomeIcon icon={faFax} size="sm" />
                  </i>{" "}
                  03428180890
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    fontFamily: "Comic Sans MS",
                    fontWeight: "bold",
                    fontSize: "20px",
                  }}
                >
                  bangunintinusa.com
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    fontFamily: "arial",
                    fontSize: "10px",
                  }}
                >
                  Site powered by{" "}
                  <a
                    href="https://api.whatsapp.com/send?phone=6285161836960"
                    target="_blank"
                  >
                    ConsoleLog
                  </a>
                  . Managed by{" "}
                  <a href="https://www.rumahweb.com/" target="_blank">
                    Rumahweb Indonesia
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="item w-40">
            <div
              className="map-container"
              style={{ marginTop: "30px", marginBottom: "50px" }}
            >
              <iframe
                title="Peta Lokasi"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15800.321405638828!2d112.1457826!3d-8.0932885!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e78ed68e26eb4c1%3A0x90cff51dd883a2ba!2sPT.%20BANGUN%20INTI%20NUSA!5e0!3m2!1sid!2sid!4v1687182438459!5m2!1sid!2sid"
                style={{ width: "100%", height: "300px", border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
