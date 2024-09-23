import "../index.css";

function Card({ character, handleClick, value }) {
  return (
    <div className="card" value={value}>
      <img src={character.images} alt="" onClick={handleClick} />
      <h4>{character.name}</h4>
    </div>
  );
}

export default Card;
