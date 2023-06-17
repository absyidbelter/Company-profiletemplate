import "../../Resources/css/project.css";
import { useState } from "react";

const ItemTwo = ({ src }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div className="impactfull-card-asset">
      <div className="container">
        <img src={src} alt="Avatar" className="image-asset" />
        <img src={src} alt="Avatar" className="image-project" />
        {showOverlay && (
          <div className="overlay">
            <div className="text">hallo</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemTwo;
