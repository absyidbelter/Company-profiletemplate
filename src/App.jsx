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
              <NavLink exact activeClassName="active" to="/beranda">
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang-kami">Tentang Kami</NavLink>
            </li>
            <li>
              <NavLink to="/lingkup-pelayanan">Lingkup Pelayanan</NavLink>
            </li>
            <li>
              <NavLink to="/galeri">Galeri</NavLink>
            </li>
            <li>
              <NavLink to="/aset-pendukung">Aset Pendukung</NavLink>
            </li>
            <li>
              <NavLink to="/kontak">Kontak</NavLink>
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
