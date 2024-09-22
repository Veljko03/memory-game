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

  useEffect(() => {
    setAllCards(shuffleArray(allCards));
  }, []);

  return (
    <div>
      {allCards.map((c) => (
        <Card key={c} character={c} />
      ))}
    </div>
  );
}

export default Cards;
