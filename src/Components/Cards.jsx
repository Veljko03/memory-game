import { useEffect, useState } from "react";
import Card from "./Card";
import "../index.css";

function shuffleArray(toShufle) {
  return toShufle
    .map((a) => ({ sort: Math.random(), value: a }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
}

function Cards({
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
  eleven,
  twelwe,
}) {
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
    eleven,
    twelwe,
  ]);
  const [chekArr, setCheckArr] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleCardClick = (e) => {
    let cardID = e.target.parentNode.getAttribute("value");

    if (chekArr.includes(cardID)) {
      setCurrentScore(0);
      setCheckArr([]);
    } else {
      setCheckArr([...chekArr, cardID]);
      setCurrentScore((c) => c + 1);
      console.log(currentScore + "in if");
    }

    setAllCards(shuffleArray(allCards));
  };
  useEffect(() => {
    if (currentScore >= bestScore) {
      setBestScore(currentScore);
    }
  }, [currentScore]);

  console.log(chekArr + "arr");

  if (bestScore == 12) {
    return (
      <div>
        <h1>You won man!</h1>
      </div>
    );
  } else {
    return (
      <div>
        <div className="score">
          <h3>Current score: {currentScore}</h3>
          <h3>Best score: {bestScore}</h3>
        </div>
        <div className="cards">
          {allCards.map((c) => (
            <Card
              key={c.id}
              value={c.id}
              character={c}
              handleClick={handleCardClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
