import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../Resources/css/service.css";
import { motion, useAnimation } from "framer-motion";
import ServiceMapers from "../Components/utils";
import { useInView } from "react-intersection-observer";
import { headingAnimation, sectionBodyAnimation } from "../hooks/useAnimation";
import ClientCom from "../Components/Assets/Asset";
import Footer from "../Components/Footer/Footer";
import { ServiceCom } from "../Components";
import ServicesLingkup from "../Components/service/Projects/Lingkup-layanan/Services";

const Services = () => {
  let Navigate = useNavigate();

  let Homehandle = () => {
    Navigate("/home");
  };
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Lingkup Pelayanan</h1>
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
              <a href="#lingkup-pelayanan" className="active">
                Lingkup Pelayanan
              </a>
            </li>
          </ul>
        </div>
      </div>
      <section>
        <h3
          style={{
            color: "black",
            textAlign: "left",
            fontWeight: "normal",
            paddingBottom: "15px",
            textAlign: "center",
          }}
        >
          Berdasarkan kualifikasi yang dimiliki PT. Bangun Inti Nusa dapat
          memberikan layanan jasa sebagai berikut :
        </h3>
        <ServicesLingkup />
      </section>
      <div style={{ marginTop: "0px", marginBottom: "60px" }}>
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
      <Footer>
        {" "}
        <Footer />
      </Footer>
    </>
  );
};

export default Services;
