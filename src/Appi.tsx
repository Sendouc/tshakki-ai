import React, { useState, useEffect } from "react";
import Chess from "react-chess";
import { haeLautaTekoälynSiirronJälkeen } from "./logiikka";

const Appi = () => {
  const [lauta, setLauta] = useState([
    "R@h1",
    "P@f2",
    "q@d8",
    "R@a1",
    "P@a2",
    "P@c2",
    "b@c8",
    "p@d7",
    "Q@d1",
    "n@g8",
  ]);
  const [valkoisenVuoro, setValkoisenVuoro] = useState(true);

  useEffect(() => {
    if (valkoisenVuoro) return;

    setLauta(haeLautaTekoälynSiirronJälkeen());
    setValkoisenVuoro(true);
  }, [valkoisenVuoro]);

  const onNappulanLiikutus = (
    nappula: any,
    ruudusta: string,
    ruutuun: string
  ) => {
    console.log({ nappula, ruudusta, ruutuun });

    const uusiLauta = [...lauta];
    setLauta(
      uusiLauta.map((nappulaRuudussa) =>
        nappulaRuudussa.split("@")[1] === ruudusta
          ? `${nappulaRuudussa.split("@")[0]}@${ruutuun}`
          : nappulaRuudussa
      )
    );
    setValkoisenVuoro(false);
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
        allowMoves={valkoisenVuoro}
      />
    </div>
  );
};

export default Appi;
