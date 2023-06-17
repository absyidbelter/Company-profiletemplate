import { NavLink } from "react-router-dom";
import { Router } from "./Components";
import logo from "./Resources/img/logo.png";

const App = () => {
  return (
    <>
      <nav>
        <ul className="topnav">
          <li>
            <p>
            <img src={logo} height="50" alt="Logo" style={{ marginTop: "-20px" }} />
            </p>
          </li>
          <div className="right">
            <li>
              <NavLink exact activeClassName="active" to="/home">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">Tentang Kami</NavLink>
            </li>
            <li>
              <NavLink to="/services">Lingkup Pelayanan</NavLink>
            </li>
            <li>
              <NavLink to="/galeri">Galeri</NavLink>
            </li>
            <li>
              <NavLink to="/assets">Aset Pendukung</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Kontak</NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Router />
      {/* <footer>
        <div className="copyright">
          Copyright 2023. All Rights Reserved Sobhi Sami.
        </div>
      </footer> */}
    </>
  );
};

export default App;
