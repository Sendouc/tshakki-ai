import React, { useState } from "react";
import Chess from "react-chess";
import { haeLautaTekoälynSiirronJälkeen } from "./logiikka";
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
      lautaNyt
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

    setLauta(uusiLauta);
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
    </div>
  );
};

export default Appi;
