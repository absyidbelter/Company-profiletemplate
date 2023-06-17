import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../Resources/img/logo.png';
import TentangKamiPDF from '../Resources/pdf/TentangKami.pdf';

const About = () => {
  let Navigate = useNavigate();

  let Homehandle = () => {
    Navigate('/home');
  };

  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Tentang Kami</h1>
          <ul className="breadcrumb">
            <li><button onClick={Homehandle}>Home</button></li>
            <li><NavLink className={props => props.isActive ? "active" : ""}>Tentang Kami</NavLink></li>
          </ul>
        </div>
      </div>
      <section id="about">
        <div className="about flex main-container mt-30">
          <div className="item">
            <img src={logo} alt="" />
          </div>
          <div className="item pt-30">
            <span className="green u-text-sup">Tentang Kami</span>
            <p>
              PT. Bangun Inti Nusa adalah perusahaan konstruksi swasta nasional yang didirikan di kota Blitar pada tanggal 2 Januari 2019. Kami berkomitmen untuk mengisi pembangunan bangsa dan negara dengan kualitas pekerjaan terbaik.
            </p>
            <h4>Visi dan Misi</h4>
            <p>Visi: Menjadi mitra terbaik sebagai kontraktor Nasional.</p>
            <p>Misi: Memberikan kepuasan pelanggan melalui pekerjaan berkualitas, harga yang kompetitif, dan penyelesaian tepat waktu.</p>
          </div>
        </div>
        <div className="about">
          <h4>Kebijakan Mutu dan K3</h4>
          <p className="mt-30">
            Kami berkomitmen untuk terus meningkatkan mutu kerja dan hasil kerja secara berkesinambungan. Kami juga berusaha memenuhi harapan dan kepuasan pelanggan dengan menerapkan, merawat, dan melakukan perbaikan berkelanjutan pada sistem manajemen PT. Bangun Inti Nusa.
          </p>
          <h4>Profil Perusahaan</h4>
          <embed src={`${TentangKamiPDF}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} width="100%" height="500" type="application/pdf" fullscreen="true" />
        </div>
      </section>
    </>
  );
};

export default About;
