import React from "react";
import { Project } from "../Components";
import { NavLink } from "react-router-dom";

const Projects = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Galeri Proyek</h1>
          <ul className="breadcrumb">
            <li>
              <NavLink
                to="/home"
                className={(props) => (props.isActive ? "active" : "")}
              >
                {" "}
                Home
              </NavLink>
            </li>
            <li>
              <a href="#galeri" className="active">
                galeri
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Project />
    </>
  );
};

export default Projects;
