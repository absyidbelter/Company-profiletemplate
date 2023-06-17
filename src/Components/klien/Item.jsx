import "../../Resources/css/service.css";
import { useState } from "react";

const ItemClient = ({ src, text }) => {
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
        <img src={src} alt="Avatar" className="image-client" />
        {showOverlay && (
          <div className="overlay-client">
            <div className="text">{text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemClient;
