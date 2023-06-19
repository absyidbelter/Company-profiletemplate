import { useState } from "react";

const ItemSer = ({ src, text }) => {
  const [showOverlay, setShowOverlay] = useState(false);

  const handleMouseEnter = () => {
    setShowOverlay(true);
  };

  const handleMouseLeave = () => {
    setShowOverlay(false);
  };

  return (
    <div
      className="impactfull-card-service"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={src} alt="Avatar" className="image-service" />
      {showOverlay && (
        <div className="overlay-service">
          <div className="text-service">{text}</div>
        </div>
      )}
    </div>
  );
};

export default ItemSer;
