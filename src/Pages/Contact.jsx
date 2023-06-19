import {
  faEnvelope,
  faMap,
  faFax,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import "../Resources/css/contact.css";
import Footer from "../Components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Kontak Kami</h1>
          <ul className="breadcrumb">
            <li>
              <NavLink to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li>
              <a href="#" className="active">
                Kontak
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section id="contactus">
        <div className="flex" style={{ marginTop: "80px", marginLeft: "40px" }}>
          <div className="item w-40">
            <span className="green u-text-sup">Hubungi Kami</span>
            <div className="contact-info mt-30 flex">
              <div className="item w-100">
                <h1>PT BANGUN INTI NUSA</h1>
                <h5> Kontraktor Umum dan Perdagangan</h5>
                <div className="contact-text">
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
                <div className="contact-text">
                  <i className="icon">
                    <FontAwesomeIcon icon={faEnvelope} size="sm" />
                  </i>{" "}
                  <a href="mailto:pt.bangunintinusa@gmail.com">
                    pt.bangunintinusa@gmail.com
                  </a>
                </div>
              </div>
              <div className="item w-100">
                <div className="contact-text">
                  <i className="icon">
                    <FontAwesomeIcon icon={faMap} size="sm" />
                  </i>{" "}
                  <span>
                    Perum. Bengawan Solo Regency Block C - No. 01Kota Blitar,
                    Jawa Timur
                  </span>
                </div>
              </div>
              <div className="item w-100">
                <div className="contact-text">
                  <i className="icon">
                    <FontAwesomeIcon icon={faFax} size="sm" />
                  </i>{" "}
                  03428180890
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex" style={{ marginTop: "50px" }}>
          <div
            className="item w-60"
            style={{ marginRight: "40px", marginLeft: "40px" }}
          >
            <span className="green u-text-sup">Titik Lokasi</span>
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
      <Footer />
    </>
  );
};

export default Contact;
