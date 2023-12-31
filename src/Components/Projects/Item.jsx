import "../../Resources/css/project.css";
import { useState } from "react";

const ItemEx = ({ src, text }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div className="impactfull-card-project" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="container">
        <img src={src} alt="Avatar" className="image-project" />
        {showOverlay && (
          <div className="overlay">
            <div className="text">{text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemEx;
