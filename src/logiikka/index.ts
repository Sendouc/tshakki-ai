import { Lauta, Nappula, NappulanTyyppi, Puoli } from "../tyypit";
import { siirtoGeneraattorit } from "./siirtoGeneraattorit";
import { onkoPeliLoppu } from "./työkalut";

const nappuloidenArvot: { [key in NappulanTyyppi]: number } = {
  SOTILAS: 1,
  RATSU: 3,
  LÄHETTI: 3.5,
  TORNI: 5,
  KUNINGATAR: 9,
  KUNINGAS: 99999999999,
};

/**
 * Palauttaa laudan tämän hetkisen tilanteen staattisen analyysin
 *
 * @param lauta Laudan tila tällä hetkellä
 * @returns Laudan staattinen analyysi numerona, jossa isompi numero on parempi mustalle
 */
const arvioiLaudanTilanne = (lauta: Lauta) => {
  let tilanne = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const nappula = lauta[i][j];
      if (!nappula) continue;

      if (nappula.väri === "MUSTA") {
        tilanne += nappuloidenArvot[nappula.tyyppi];
      } else {
        tilanne -= nappuloidenArvot[nappula.tyyppi];
      }
    }
  }

  return tilanne;
};

/**
 * Palauta nappulan mahdolliset siirrot listana
 *
 * @param lauta Laudan tila tällä hetkellä
 * @param nappula Nappula jota ollaan siirtämässä
 * @param nappulaI Nappulan "i" indeksi laudalla
 * @param nappulaJ Nappulan "j" indeksi laudalla
 * @returns Nappulan mahdolliset siirrot
 */
const haeMahdollisetSiirrot = (
  lauta: Lauta,
  nappula: Nappula,
  nappulaI: number,
  nappulaJ: number
) => [
  ...siirtoGeneraattorit[nappula.tyyppi](lauta, nappula, nappulaI, nappulaJ),
];

/**
 * Palauttaa laudan uuden tilan tekoälyn tekemän siirron jälkeen.
 *
 * @param lauta Laudan tila tällä hetkellä
 * @param syvyys Minimax-algoritmin syvyys, jos 0 niin algoritmi on loppu
 * @param alfa Tämänhetkinen paras arvo, jonka musta on saavuttanut aiemmin puussa
 * @param beeta Tämänhetkinen paras arvo, jonka valkoinen on saavuttanut aiemmin puussa
 * @param siirronTekijä
 * @returns Laudan uusi tila tekoälyn siirron jälkeen
 */
const minimax = (
  lauta: Lauta,
  syvyys: number,
  alfa: number,
  beeta: number,
  siirronTekijä: Puoli = "MUSTA"
): [number, Lauta] => {
  if (syvyys === 0 || onkoPeliLoppu(lauta)) {
    return [arvioiLaudanTilanne(lauta), lauta];
  }

  // perusideana musta yrittää saada mahdollisimman ison arvon ja valkoinen pienen
  if (siirronTekijä === "MUSTA") {
    // alustetaan huonoimmalla mahdollisella arvolla
    let parhaanSiirronArvo = -Infinity;
    let parasPositio = lauta;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const nappula = lauta[i][j];
        if (!nappula || nappula.väri !== "MUSTA") continue;

        for (const siirto of haeMahdollisetSiirrot(lauta, nappula, i, j)) {
          const [arvo] = minimax(siirto, syvyys - 1, alfa, beeta, "VALKOINEN");
          if (arvo > parhaanSiirronArvo) {
            parhaanSiirronArvo = arvo;
            parasPositio = siirto;
          }
          alfa = Math.max(alfa, arvo);
          if (beeta <= alfa) {
            break;
          }
        }
      }
    }

    return [parhaanSiirronArvo, parasPositio];
  } else {
    // alustetaan huonoimmalla mahdollisella arvolla
    let parhaanSiirronArvo = +Infinity;
    let parasPositio = lauta;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        const nappula = lauta[i][j];
        if (!nappula || nappula.väri !== "VALKOINEN") continue;

        for (const siirto of haeMahdollisetSiirrot(lauta, nappula, i, j)) {
          const [arvo] = minimax(siirto, syvyys - 1, alfa, beeta, "MUSTA");
          if (arvo < parhaanSiirronArvo) {
            parhaanSiirronArvo = arvo;
            parasPositio = siirto;
          }
          beeta = Math.min(beeta, arvo);
          if (beeta <= alfa) {
            break;
          }
        }
      }
    }

    return [parhaanSiirronArvo, parasPositio];
  }
};

/**
 * Palauttaa laudan uuden tilan tekoälyn tekemän siirron jälkeen.
 *
 * @param lauta Laudan tila tällä hetkellä
 * @returns Laudan uusi tila tekoälyn siirron jälkeen
 */
export const haeLautaTekoälynSiirronJälkeen = (
  lauta: Lauta,
  minimaxSyvyys: number = 3
) => {
  return minimax(lauta, minimaxSyvyys, -Infinity, +Infinity, "MUSTA")[1];
};
