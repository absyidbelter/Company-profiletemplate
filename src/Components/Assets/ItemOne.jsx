import "../../Resources/css/asset.css";

import { useState } from "react";

const ItemOne = ({ src }) => {
    const [showOverlay, setShowOverlay] = useState(false);
  
    const handleMouseEnter = () => {
      setShowOverlay(true);
    };
  
    const handleMouseLeave = () => {
      setShowOverlay(false);
    };
  
    return (
      <div className="item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div >
          <img src={src} alt="Avatar" className="imageOne" />
          {/* {showOverlay && <div className="overlay" />} */}
        </div>
      </div>
    );
  };
  
  export default ItemOne;