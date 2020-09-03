import React from "react";
import Chess from "react-chess";

const Appi = () => {
  const onNappulanLiikutus = (
    nappula: any,
    ruudusta: string,
    ruutuun: string
  ) => {
    console.log({ nappula, ruudusta, ruutuun });
  };

  return (
    <div
      style={{
        maxWidth: "48rem",
        margin: "auto",
      }}
    >
      <Chess
        pieces={[
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
        ]}
        onMovePiece={onNappulanLiikutus}
        allowMoves={true}
      />
    </div>
  );
};

export default Appi;
