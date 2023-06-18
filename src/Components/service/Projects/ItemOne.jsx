const ItemSer = ({ src, text }) => {
  return (
    <div className="item">
      <div className="container">
        <img src={src} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text" style={{ margin: "100px" }}>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemSer;
