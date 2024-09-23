import { useState, useEffect } from "react";
import "./index.css";
import Cards from "./Components/Cards";

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

  useEffect(() => {
    if (akatsuki != null) {
      const deidara = akatsuki.find((x) => x.id == 193);
      setDeidara(deidara);
      const itachi = akatsuki.find((x) => x.id == 1293);
      setItachi(itachi);
      const hidan = akatsuki.find((x) => x.id == 388);
      setHidan(hidan);
      const jugo = akatsuki.find((x) => x.id == 325);
      setJugo(jugo);
      const kabuto = akatsuki.find((x) => x.id == 195);
      setKabuto(kabuto);
      const kakuza = akatsuki.find((x) => x.id == 558);
      setKakuza(kakuza);
      const karin = akatsuki.find((x) => x.id == 141);
      setKarin(karin);
      const kisame = akatsuki.find((x) => x.id == 421);
      setKisame(kisame);
      const konan = akatsuki.find((x) => x.id == 684);
      setKonan(konan);
      const zetsu = akatsuki.find((x) => x.id == 1425);
      setZetsu(zetsu);
    }
  }, [akatsuki]);

  console.log(akatsuki);

  if (zetsu == null) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else {
    return (
      <>
        <div className="topSection">
          <h1>Naruto memory game</h1>
          <div className="score">
            <h3>Current score:</h3>
            <h3>Best score:</h3>
          </div>
          <Cards
            one={zetsu}
            two={kabuto}
            three={kakuza}
            four={karin}
            five={itachi}
            six={kisame}
            seven={konan}
            eight={jugo}
            nine={hidan}
            ten={deidara}
          />
        </div>
      </>
    );
  }
}

export default App;
