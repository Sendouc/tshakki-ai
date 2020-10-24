import { Nappula } from "../tyypit";
import { kopioi2dTaulukko, onkoPeliLoppu } from "./työkalut";

const testiTaulukko = [
  ["1", "2"],
  [null, "4"],
];

const laudanAloitusTila = [
  [
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "KUNINGATAR",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "KUNINGAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
  ],
  [
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
  ],
  [
    null,
    null,
    null,
    null,
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    null,
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
  ],
  [
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGATAR",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
  ],
] as Nappula[][];

const laudanAloitusTilaMinusYksiKuningas = [
  [
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "KUNINGATAR",
    },
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
  ],
  [
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
  ],
  [
    null,
    null,
    null,
    null,
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    null,
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
  ],
  [
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGATAR",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
  ],
] as Nappula[][];

it("kopioi taulukon oikein", () => {
  const kopioitu = kopioi2dTaulukko(testiTaulukko);

  expect(JSON.stringify(kopioitu)).toBe(JSON.stringify(testiTaulukko));
});

it("ei lopeta peliä alkutilanteessa", () => {
  expect(onkoPeliLoppu(laudanAloitusTila)).toBe(false);
});

it("lopettaa pelin jos vain yksi kuningas", () => {
  expect(onkoPeliLoppu(laudanAloitusTilaMinusYksiKuningas)).toBe(true);
});

export {};
