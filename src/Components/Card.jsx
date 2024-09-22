function Card({ character, handleClick }) {
  return (
    <div className="card" onClick={handleClick}>
      <img src={character.images} alt="" />
      <h4>{character.name}</h4>
    </div>
  );
}

export default Card;
