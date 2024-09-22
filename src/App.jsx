import { useState } from "react";

function App() {
  const akatsuki = fetch("https://narutodb.xyz/api/akatsuki")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));

  return (
    <>
      <div className="topSection">
        <h1>Naruto memory game</h1>
        <div className="score">
          <h3>Current score:</h3>
          <h3>Best score:</h3>
        </div>
      </div>
      <div className="cards"></div>
    </>
  );
}

export default App;
