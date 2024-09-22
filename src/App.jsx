import { useState, useEffect } from "react";
import "./index.css";

function fetchData() {}

function App() {
  const APIUrl = "https://narutodb.xyz/api/akatsuki";
  const [akatsuki, setAkatsuki] = useState(null);
  useEffect(() => {
    fetch(APIUrl)
      .then((response) => response.json())
      .then((data) => data.akatsuki)
      .then((rez) => setAkatsuki(rez))
      .catch((error) => console.error("Error:", error));
  }, []);

  const deidara = akatsuki.find((x) => x.id == 193);
  console.log(deidara);

  return (
    <>
      <div className="topSection">
        <h1>Naruto memory game</h1>
        <div className="score">
          <h3>Current score:</h3>
          <h3>Best score:</h3>
        </div>
      </div>
      <div className="cards">
        <div className="card"></div>
      </div>
    </>
  );
}

export default App;
