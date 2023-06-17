import { Route, Routes } from "react-router-dom";
import { Home, About, Projects, Contact} from "../../Components";
import Services from "../../Pages/Service";
import Assets from "../../Pages/Assets";

const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/galeri" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </>
  );
};

export default Router;
