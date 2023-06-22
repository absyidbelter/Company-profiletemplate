import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAnimation, motion } from "framer-motion";
import logo from "../../Resources/img/logo.png";
import "../../Resources/css/home.css";

const AboutSection = () => {
  const controls = useAnimation();
  const Navigate = useNavigate();

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1, // Delay selama 1 detik sebelum animasi dimulai
        duration: 0.5,
        type: "spring",
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 2, 
        duration: 0.5,
      },
    },
  };

  const AboutHandle = () => {
    Navigate("/tentang-kami");
  };

  useEffect(() => {
    controls.start("visible");
  }, []);

  return (
    <section id="about">
      <motion.div
        className="about flex main-container"
        style={{ marginTop: "60px", marginBottom: "40px" }}
        initial="hidden"
        animate={controls}
        variants={containerVariants}
      >
        <motion.div
          className="item"
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <img src={logo} alt="" />
        </motion.div>
        <div className="item" style={{ marginTop: "30px" }}>
          <div className="flex">
            <div>
              <span className="green u-text-sup text-justify">Tentang Kami</span>
              <p>
                PT. BANGUN INTI NUSA merupakan salah satu perusahaan yang
                bergerak dibidang jasa konstruksi swasta nasional yang didirikan
                di kota Blitar pada tanggal 2 Januari 2019 sebagai langkah usaha
                untuk mengisi pembangunan bangsa dan negara.
              </p>
              <a onClick={AboutHandle} className="green-btn">
                Read More
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
