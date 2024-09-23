import { useEffect, useState } from "react";
import Card from "./Card";

function shuffleArray(toShufle) {
  return toShufle
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

function Cards({ one, two, three, four, five, six, seven, eight, nine, ten }) {
  const [allCards, setAllCards] = useState([
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
  ]);
  const [chekArr, setCheckArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (e) => {
    let cardID = e.target.parentNode.getAttribute("value");

    if (chekArr.includes(cardID)) {
      setCurrentScore(0);
    } else {
      setCheckArr([...chekArr, cardID]);
      setCurrentScore((c) => c + 1);
    }

    setAllCards(shuffleArray(allCards));
  };

  console.log(currentScore);

  return (
    <div>
      {allCards.map((c) => (
        <Card
          key={c.id}
          value={c.id}
          character={c}
          handleClick={handleCardClick}
        />
      ))}
    </div>
  );
}

export default Cards;
