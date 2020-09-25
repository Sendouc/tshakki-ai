import { kopioi2dTaulukko } from "./työkalut";

const testiTaulukko = [
  ["1", "2"],
  [null, "4"],
];

it("kopioi taulukon oikein", () => {
  const kopioitu = kopioi2dTaulukko(testiTaulukko);

  expect(JSON.stringify(kopioitu)).toBe(JSON.stringify(testiTaulukko));
});

export {};
