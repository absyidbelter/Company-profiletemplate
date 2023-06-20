import "../../../../Resources/css/lingkup-layanan.css";

function Card(props) {
  return (
    <div className="card text-center">
      <br />

      <div className="text-center">
        <img
          alt="card-img"
          src={props.png}
          className="text-center img-fluid"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <div className="text-center">
        <h3 className="card-title">{props.title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
}

export default Card;
