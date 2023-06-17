import React from "react";
import { NavLink } from "react-router-dom";
import AssetCom from "../Components/Assets/Asset";


const Assets = () => {
  return (
    <>
      <div className="cover-page">
        <div className="tit">
          <h1>Aset Pendukung</h1>
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
              <a href="#" className="active">
                project
              </a>
            </li>
          </ul>
        </div>
        <AssetCom />
      </div>
    </>
  );
};

export default Assets;
