import { Lauta, Nappula, NappulanTyyppi, Puoli } from "../tyypit";

const nappuloidenArvot: { [key in NappulanTyyppi]: number } = {
  SOTILAS: 1,
  RATSU: 3,
  LÄHETTI: 3.5,
  TORNI: 5,
  KUNINGATAR: 9,
  KUNINGAS: Infinity,
};

const siirronArvo = (
  lauta: Lauta,
  väri: Puoli,
  i: number,
  j: number,
  vainSyönti: boolean = false
) => {
  if (i < 0 || j < 0 || i > 7 || j > 7) return -Infinity;
  const nappula = lauta[i][j];
  if (!vainSyönti && !nappula) return 0;
  if (!nappula || nappula.väri === väri) return -Infinity;

  return nappuloidenArvot[nappula.tyyppi];
};

/**
 * Palauttaa parhaan mahdollisen siirron nappulalle.
 *
 * @param lauta Laudan tila tällä hetkellä
 * @param nappula Nappula jota ollaan siirtämässä
 * @param nappulaI Nappulan "i" indeksi laudalla
 * @param nappulaJ Nappulan "j" indeksi laudalla
 * @returns Parhaan mahdollisen siirron arvon ja uuden laudan tilan
 */
const haeNappulanParasMahdollinenSiirto = (
  lauta: Lauta,
  nappula: Nappula,
  nappulaI: number,
  nappulaJ: number
): [number, Lauta] => {
  let parhaanSiirronArvo = -Infinity;
  let uusiLauta: Lauta | null = null;
  let uusiI = -1;
  let uusiJ = -1;

  let uusiArvo = 0;
  let arvo = -Infinity;

  switch (nappula.tyyppi) {
    case "KUNINGAS":
      uusiArvo = siirronArvo(lauta, nappula.väri, nappulaI - 1, nappulaJ);
      if (uusiArvo > arvo) {
        arvo = uusiArvo;
        uusiI = nappulaI - 1;
        uusiJ = nappulaJ;
      }

      uusiArvo = siirronArvo(lauta, nappula.väri, nappulaI, nappulaJ - 1);
      if (uusiArvo > arvo) {
        arvo = uusiArvo;
        uusiI = nappulaI;
        uusiJ = nappulaJ - 1;
      }

      uusiArvo = siirronArvo(lauta, nappula.väri, nappulaI + 1, nappulaJ);
      if (uusiArvo > arvo) {
        arvo = uusiArvo;
        uusiI = nappulaI + 1;
        uusiJ = nappulaJ;
      }

      uusiArvo = siirronArvo(lauta, nappula.väri, nappulaI, nappulaJ + 1);
      if (uusiArvo > arvo) {
        arvo = uusiArvo;
        uusiI = nappulaI;
        uusiJ = nappulaJ + 1;
      }

      if (parhaanSiirronArvo < arvo) {
        parhaanSiirronArvo = arvo;
        uusiLauta = [...lauta];
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][nappulaJ + 1] = nappula;
      }
      break;
    case "KUNINGATAR":
      break;
    case "LÄHETTI":
      break;
    case "RATSU":
      arvo = -Infinity;

      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          if (Math.abs(i) + Math.abs(j) === 4 || i === 0 || j === 0) continue;
          const uusiArvo = siirronArvo(
            lauta,
            nappula.väri,
            nappulaI + i,
            nappulaJ + j
          );

          if (uusiArvo > arvo) {
            arvo = uusiArvo;
            uusiI = nappulaI + i;
            uusiJ = nappulaJ + j;
          }
        }
      }

      if (parhaanSiirronArvo < arvo) {
        parhaanSiirronArvo = arvo;
        uusiLauta = [...lauta];
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[uusiI][uusiJ] = nappula;
      }
      break;
    case "SOTILAS":
      break;
    case "TORNI":
      break;
    default:
      throw new Error("Väärä nappulan tyyppi");
  }

  if (!uusiLauta) uusiLauta = lauta;
  return [parhaanSiirronArvo, uusiLauta];
};

const haeLaudanParasMahdollinenSiirto = (
  lauta: Lauta,
  siirronTekijä: Puoli = "MUSTA"
): Lauta => {
  let parhaanSiirronArvo = -Infinity;
  let uusiLauta = null;
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const nappula = lauta[i][j];
      if (!nappula || nappula.väri !== siirronTekijä) continue;
      const [
        nappulanParhaanSiirronArvo,
        uudenLaudanTila,
      ] = haeNappulanParasMahdollinenSiirto(lauta, nappula, i, j);

      if (nappulanParhaanSiirronArvo > parhaanSiirronArvo) {
        parhaanSiirronArvo = nappulanParhaanSiirronArvo;
        uusiLauta = uudenLaudanTila;
      }
    }
  }

  if (!lauta) throw Error("Ei lautaa mitä palauttaa");

  return uusiLauta!; //@TODO
};

/**
 * Palauttaa laudan uuden tilan tekoälyn tekemän siirron jälkeen.
 *
 * @param lauta Laudan tila tällä hetkellä
 * @returns Laudan uusi tila tekoälyn siirron jälkeen
 */
export const haeLautaTekoälynSiirronJälkeen = (lauta: Lauta) => {
  return haeLaudanParasMahdollinenSiirto(lauta);
};
