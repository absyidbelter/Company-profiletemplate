import "../../Resources/css/asset.css";

import { useState } from "react";

const ItemAss = ({ src }) => {
    const [showOverlay, setShowOverlay] = useState(false);
  
    const handleMouseEnter = () => {
      setShowOverlay(true);
    };
  
    const handleMouseLeave = () => {
      setShowOverlay(false);
    };
  
    return (
      <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="container">
          <img src={src} alt="Avatar" className="image" />
        </div>
      </div>
    );
  };
  
  export default ItemAss;