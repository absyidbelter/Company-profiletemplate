import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Resources/css/service.css';
import { ServiceCom } from '../Components';
import ClientCom from '../Components/klien/Client';

const Services = () => {
  let Navigate = useNavigate();

  let Homehandle = () => {
    Navigate('/home');
  };

  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Layanan</h1>
          <ul className="breadcrumb">
            <li>
              <button onClick={Homehandle}>Home</button>
            </li>
            <li>
              <NavLink to="/services" activeClassName="active">
                Lingkup PeLayanan
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <section id="services">
        <div className="services">
       
          <span className="green u-text-sup">Berdasarkan kualifikasi yang dimiliki PT. Bangun Inti Nusa, kami dapat memberikan layanan jasa sebagai
            berikut:</span>
          <div className="service-category">
            <h3>BANGUNAN GEDUNG</h3>
            <ul>
              <li>Konstruksi Bangunan Gudang dan Industri</li>
              <li>Konstruksi Bangunan Pendidikan</li>
            </ul>
          </div>
          <div className="service-category" style={{ borderRadius: 0 }}>
            <h3>BANGUNAN SIPIL</h3>
            <ul>
              <li>Konstruksi Saluran Air, Dam, Pelabuhan, dan Prasarana Sumber Daya Air Lainnya</li>
              <li>Konstruksi Jalan Raya (Kecuali jalan layang), Jalan, Rel, Kereta Api, dan Landas Pacu Bandara</li>
            </ul>
          </div>
          <div className="service-category">
            <h3>INSTALASI MEKANIKAL DAN ELEKTRIKAL</h3>
            <ul>
              <li>Konstruksi Instalasi Elektrikal Lainnya</li>
            </ul>
          </div>

          <h3 className="client-heading">Klien Kami</h3>
        </div>
        {/* <ServiceCom/> */}
        {/* <ClientCom/> */}
      </section>
    </>
  );
};

export default Services;
