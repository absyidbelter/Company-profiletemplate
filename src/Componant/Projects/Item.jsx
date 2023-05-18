const Item = ({src}) => {
  return (
    <div className="item">
      <div className="container">
        <img src={src} alt="Avatar" className="image" />
        <div className="overlay">
          <div className="text">project title can be here</div>
        </div>
      </div>
    </div>
  )
}
export default Item
