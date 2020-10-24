import React, { useState } from "react";
import Chess from "react-chess";
import { haeLautaTekoälynSiirronJälkeen } from "./logiikka";
import { onkoPeliLoppu } from "./logiikka/työkalut";
import { Lauta, Nappula, NappulanTyyppi } from "./tyypit";

const nappulaKoodiNimeksi: { [key: string]: NappulanTyyppi } = {
  p: "SOTILAS",
  P: "SOTILAS",
  n: "RATSU",
  N: "RATSU",
  B: "LÄHETTI",
  b: "LÄHETTI",
  R: "TORNI",
  r: "TORNI",
  Q: "KUNINGATAR",
  q: "KUNINGATAR",
  K: "KUNINGAS",
  k: "KUNINGAS",
};

const nappulaNimiKoodiksi: Record<NappulanTyyppi, string> = {
  SOTILAS: "p",
  RATSU: "n",
  LÄHETTI: "b",
  TORNI: "r",
  KUNINGATAR: "q",
  KUNINGAS: "k",
};

const ruudunKirjainIndeksiksi: Record<string, number> = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const ruudunIndeksiKirjaimeksi = ["a", "b", "c", "d", "e", "f", "g", "h"];

const Appi = () => {
  const [lauta, setLauta] = useState([
    "R@a1",
    "P@a2",
    "p@a7",
    "r@a8",
    "N@b1",
    "P@b2",
    "p@b7",
    "n@b8",
    "B@c1",
    "P@c2",
    "p@c7",
    "b@c8",
    "Q@d1",
    "P@d2",
    "p@d7",
    "q@d8",
    "K@e1",
    "P@e2",
    "p@e7",
    "k@e8",
    "B@f1",
    "P@f2",
    "p@f7",
    "b@f8",
    "N@g1",
    "P@g2",
    "p@g7",
    "n@g8",
    "R@h1",
    "P@h2",
    "p@h7",
    "r@h8",
  ]);

  const [edellinenLauta, setEdellinenLauta] = useState<string[] | null>(null);
  const [syvyys, setSyvyys] = useState(3);

  const onNappulanLiikutus = (_: any, ruudusta: string, ruutuun: string) => {
    const lautaSiirronJälkeen = [...lauta]
      // poistetaan mahdollisesti syöty nappula
      .filter((nappulaRuudussa) => nappulaRuudussa.split("@")[1] !== ruutuun)
      // siirretään nappulaa
      .map((nappulaRuudussa) => {
        return nappulaRuudussa.split("@")[1] === ruudusta
          ? `${nappulaRuudussa.split("@")[0]}@${ruutuun}`
          : nappulaRuudussa;
      });

    const lautaNyt: Lauta = [
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null],
    ];

    for (const nappulaInfo of lautaSiirronJälkeen) {
      const nappula: Nappula = {
        väri: nappulaInfo === nappulaInfo.toLowerCase() ? "MUSTA" : "VALKOINEN",
        tyyppi: nappulaKoodiNimeksi[nappulaInfo.charAt(0)],
      };

      lautaNyt[parseInt(nappulaInfo.charAt(3)) - 1][
        ruudunKirjainIndeksiksi[nappulaInfo.charAt(2)]
      ] = nappula;
    }

    const uusiLauta: string[] = [];

    const lautaTekoälynSiirronJälkeen = haeLautaTekoälynSiirronJälkeen(
      lautaNyt,
      syvyys
    );

    for (const [indexRivi, rivi] of lautaTekoälynSiirronJälkeen.entries()) {
      for (const [indexKolumni, nappula] of rivi.entries()) {
        if (!nappula) continue;
        let nappulanKirjain = nappulaNimiKoodiksi[nappula.tyyppi];
        if (nappula.väri === "VALKOINEN")
          nappulanKirjain = nappulanKirjain.toUpperCase();
        uusiLauta.push(
          `${nappulanKirjain}@${ruudunIndeksiKirjaimeksi[indexKolumni]}${
            indexRivi + 1
          }`
        );
      }
    }

    setEdellinenLauta(lauta);
    setLauta(uusiLauta);

    if (onkoPeliLoppu(lautaTekoälynSiirronJälkeen)) {
      const uusiPeli = window.confirm(
        "Peli loppui. Aloita uusi peli valitsemalla 'OK' tai jatka valitsemalla 'Cancel'."
      );

      if (uusiPeli) window.location.reload();
    }
  };

  return (
    <div
      style={{
        maxWidth: "48rem",
        margin: "auto",
      }}
    >
      <Chess
        pieces={lauta}
        onMovePiece={onNappulanLiikutus}
        onDragStart={(piece) =>
          piece.notation.split("@")[0] ===
          piece.notation.split("@")[0].toUpperCase()
        }
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          {!!edellinenLauta ? (
            <button
              className="big-button"
              onClick={() => {
                setLauta(edellinenLauta!);
                setEdellinenLauta(null);
              }}
            >
              Hups 🔙
            </button>
          ) : (
            <div />
          )}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <button
            onClick={() => setSyvyys(1)}
            className={`big-button${syvyys === 1 ? " active" : ""}`}
          >
            Helppo 🥱
          </button>
          <button
            onClick={() => setSyvyys(2)}
            className={`big-button${syvyys === 2 ? " active" : ""}`}
          >
            Normaali 😐
          </button>
          <button
            onClick={() => setSyvyys(3)}
            className={`big-button${syvyys === 3 ? " active" : ""}`}
          >
            Haastava 😓
          </button>
          <button
            onClick={() => setSyvyys(4)}
            className={`big-button${syvyys === 4 ? " active" : ""}`}
          >
            Vaikea 😠
          </button>
        </div>
      </div>
    </div>
  );
};

export default Appi;
