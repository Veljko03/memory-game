import { useState, useEffect } from "react";
import "./index.css";

function App() {
  const APIUrl = "https://narutodb.xyz/api/akatsuki";
  const [akatsuki, setAkatsuki] = useState(null);
  const [deidara, setDeidara] = useState(null);
  const [itachi, setItachi] = useState(null);
  const [hidan, setHidan] = useState(null);
  const [jugo, setJugo] = useState(null);
  const [kabuto, setKabuto] = useState(null);
  const [kakuza, setKakuza] = useState(null);
  const [karin, setKarin] = useState(null);
  const [kisame, setKisame] = useState(null);
  const [konan, setKonan] = useState(null);
  const [zetsu, setZetsu] = useState(null);

  useEffect(() => {
    fetch(APIUrl)
      .then((response) => response.json())
      .then((data) => data.akatsuki)
      .then((rez) => setAkatsuki(rez))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(akatsuki);

  useEffect(() => {
    if (akatsuki != null) {
      console.log(akatsuki);
      const deidara = akatsuki.find((x) => x.id == 193);
      setDeidara(deidara);
      const itachi = akatsuki.find((x) => x.id == 1293);
      setItachi(itachi);
      const hidan = akatsuki.find((x) => x.id == 388);
      setHidan(hidan);
      const jugo = akatsuki.find((x) => x.id == 521);
      setJugo(jugo);
      const kabuto = akatsuki.find((x) => x.id == 1359);
      setKabuto(kabuto);
      const kakuza = akatsuki.find((x) => x.id == 558);
      setKakuza(kakuza);
      const karin = akatsuki.find((x) => x.id == 593);
      setKarin(karin);
      const kisame = akatsuki.find((x) => x.id == 421);
      setKisame(kisame);
      const konan = akatsuki.find((x) => x.id == 684);
      setKonan(konan);
      const zetsu = akatsuki.find((x) => x.id == 1425);
      setZetsu(zetsu);
    }
  }, [akatsuki]);

  //console.log(zetsu);

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
        <div className="card">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
}

export default App;
