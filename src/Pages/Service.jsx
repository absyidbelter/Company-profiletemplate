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
      <section>
        <h1
          style={{
            color: "black",
            textAlign: "left",

            paddingTop: 40,
            textAlign: "center",
          }}
        >
          Lingkup Pelayanan
        </h1>
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
        <motion.div
          className="grid grid-cols-3 gap-6 justify-center"
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {ServiceMapers?.map((service) => (
            <div
              key={service.id}
              className={`${
                service.id % 2 === 0
                  ? "bg-base-100 impactfull-card shadow-lg"
                  : "bg-base-100 impactfull-card shadow-lg"
              } rounded-lg p-6 duration-300`}
            >
              <div
                style={{
                  backgroundColor: "#24b47e",
                  padding: "16px",
                  borderRadius: "8px",
                  marginRight: "15px",
                }}
              >
                <h3
                  className="mb-0 text-2xl font-semibold text-center text-white"
                  style={{ color: "white" }}
                >
                  {service.title}
                </h3>
              </div>
              {service.description && (
                <ul className="text-accent list-disc pl-8">
                  {service.description
                    .split("\n")
                    .filter((s) => s.trim() !== "")
                    .map((s, i) => (
                      <li
                        key={i + 1}
                        className="mb-4 text-justify text-gray-500"
                      >
                        {s.trim()}
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ))}
        </motion.div>
      </section>
      <div style={{ marginTop: "0px", marginBottom: "60px" }}>
        <div>
          <span
            className="green u-text-sup text-center"
            style={{ fontSize: "24px" }}
          >
            Klein Kami
          </span>
          <p className="text-center">
            Kami telah menyelesaikan berbagai proyek dengan klien kami sebagai
            berikut:{" "}
          </p>
        </div>
        <ServiceCom />
      </div>
      <Footer />
    </>
  );
};

export default Services;
