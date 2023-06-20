import React from "react";
import { Project } from "../Components";
import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer/Footer";

const Projects = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Galeri Proyek</h1>
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
              <a href="#galeri" className="active">
                Galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Project />
      <Footer />
    </>
  );
};

export default Projects;
