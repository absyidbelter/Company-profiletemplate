import { faEnvelope, faMap, faFax, faPhone } from "@fortawesome/free-solid-svg-icons";
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
            <div className="map-container">
              <iframe
                title="Peta Lokasi"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.8952614165132!2d111.96566571611682!3d-8.097516599334214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd3bfc91a9a7011%3A0xbdedc305ff93a99a!2sPakunden%2C%20Sukorejo%2C%20Blitar%20City%2C%20East%20Java%2067122%2C%20Indonesia!5e0!3m2!1sen!2sus!4v1623741687745!5m2!1sen!2sus"
                style={{ width: "100%", height: "300px", border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default Contact;
