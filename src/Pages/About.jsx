import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Resources/img/logo.png";
import TentangKamiPDF from "../Resources/pdf/TentangKami.pdf";
import Footer from "../Components/Footer/Footer";

const About = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Tentang Kami</h1>
          <ul className="breadcrumb">
            <li>
              <NavLink
                to="/beranda"
                className={(props) => (props.isActive ? "active" : "")}
              >
                {" "}
                Beranda
              </NavLink>
            </li>
            <li>
              <a href="#tentang-kami" className="active">
                Tentang Kami
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section style={{ marginTop: "120px" }}>
        <div className="about flex main-container mt-30">
          <div className="item">
            <img src={logo} className="about-img" />
          </div>
          <div id="about-s" className="item pt-30">
            <span className="green u-text-sups u-text-justify">
              Tentang Kami
            </span>
            <p className="u-text-justify">
              PT. Bangun Inti Nusa adalah perusahaan konstruksi swasta nasional
              yang didirikan di kota Blitar pada tanggal 2 Januari 2019. Kami
              berkomitmen untuk mengisi pembangunan bangsa dan negara dengan
              kualitas pekerjaan terbaik.
            </p>
          </div>
        </div>
        <h4 className="green u-text-sup ">Visi dan Misi</h4>
        <p style={{ color: "black" }}>
          Visi: Menjadi mitra terbaik sebagai kontraktor Nasional.
        </p>
        <p style={{ color: "black" }}>
          Misi: Memberikan kepuasan pelanggan melalui pekerjaan berkualitas,
          harga yang kompetitif, dan penyelesaian tepat waktu.
        </p>
        <div className="abouts">
          <h4 className="green u-text-sup"> Kebijakan Mutu dan K3</h4>
          <p className="mt-30 u-text-justify" style={{color: "black"}}>
            Kami berkomitmen untuk terus meningkatkan mutu kerja dan hasil kerja
            secara berkesinambungan. Kami juga berusaha memenuhi harapan dan
            kepuasan pelanggan dengan menerapkan, merawat, dan melakukan
            perbaikan berkelanjutan pada sistem manajemen PT. Bangun Inti Nusa.
          </p>
          <h4 className="green u-text-sup">Profil Perusahaan</h4>
          <embed
            src={`${TentangKamiPDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
            width="100%"
            height="500"
            type="application/pdf"
            fullscreen="true"
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
