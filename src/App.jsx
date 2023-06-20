import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Router } from "./Components";
import logo from "./Resources/img/logo.png";

const App = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav>
        <div className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`} onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`topnav ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <p>
              <img src={logo} height="50" alt="Logo" style={{ marginTop: "-20px" }} />
            </p>
          </li>
          <div className="right">
            <li>
              <NavLink exact activeClassName="active" to="/beranda" onClick={toggleMobileMenu}>
                Beranda
              </NavLink>
            </li>
            <li>
              <NavLink to="/tentang-kami" onClick={toggleMobileMenu}>
                Tentang Kami
              </NavLink>
            </li>
            <li>
              <NavLink to="/lingkup-pelayanan" onClick={toggleMobileMenu}>
                Lingkup Pelayanan
              </NavLink>
            </li>
            <li>
              <NavLink to="/galeri" onClick={toggleMobileMenu}>
                Galeri
              </NavLink>
            </li>
            <li>
              <NavLink to="/aset-pendukung" onClick={toggleMobileMenu}>
                Aset Pendukung
              </NavLink>
            </li>
            <li>
              <NavLink to="/kontak" onClick={toggleMobileMenu}>
                Kontak
              </NavLink>
            </li>
          </div>
        </ul>
      </nav>
      <Router />
    </>
  );
};

export default App;
