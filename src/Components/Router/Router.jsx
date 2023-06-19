import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact} from "../../Components";
import Services from "../../Pages/Service";
import Assets from "../../Pages/Assets";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beranda" element={<Home />} />
        <Route path="/tentang-kami" element={<About />} />
        <Route path="/lingkup-pelayanan" element={<Services />} />
        <Route path="/galeri" element={<Projects />} />
        <Route path="/aset-pendukung" element={<Contact />} />
        <Route path="/kontak" element={<Assets />} />
      </Routes>
    </>
  );
};

export default Router;
