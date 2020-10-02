import { Lauta, Nappula, NappulanTyyppi, Puoli } from "../tyypit";
import { kopioi2dTaulukko } from "./työkalut";

const nappuloidenArvot: { [key in NappulanTyyppi]: number } = {
  SOTILAS: 1,
  RATSU: 3,
  LÄHETTI: 3.5,
  TORNI: 5,
  KUNINGATAR: 9,
  KUNINGAS: Infinity,
};

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

const voikoSiirtää = (
  lauta: Lauta,
  väri: Puoli,
  i: number,
  j: number,
  vainSyönti: boolean = false
) => {
  // ei voida siirtää laudan ulkopuoelle
  if (i < 0 || j < 0 || i > 7 || j > 7) return false;

  const nappula = lauta[i][j];

  // ei voida syödä omaa nappulaa
  if (nappula?.väri === väri) return false;

  // sotilas voi liikkua tiettyihin ruutuihin vain syödessä
  const vastustajanVäri = väri === "MUSTA" ? "VALKOINEN" : "MUSTA";
  if (vainSyönti && nappula?.väri !== vastustajanVäri) return false;

  return true;
};

/**
 * Simuloi nappulat siirrot kutsuen minimax-funktiota.
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
) => {
  const palautettava = [];
  let uusiLauta = null;
  switch (nappula.tyyppi) {
    case "KUNINGAS":
      if (voikoSiirtää(lauta, nappula.väri, nappulaI - 1, nappulaJ)) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI - 1][nappulaJ] = nappula;
        palautettava.push(uusiLauta);
      }

      if (voikoSiirtää(lauta, nappula.väri, nappulaI, nappulaJ - 1)) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][nappulaJ - 1] = nappula;
        palautettava.push(uusiLauta);
      }

      if (voikoSiirtää(lauta, nappula.väri, nappulaI + 1, nappulaJ)) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI + 1][nappulaJ] = nappula;
        palautettava.push(uusiLauta);
      }

      if (voikoSiirtää(lauta, nappula.väri, nappulaI, nappulaJ + 1)) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][nappulaJ + 1] = nappula;
        palautettava.push(uusiLauta);
      }
      break;
    case "KUNINGATAR":
      break;
    case "LÄHETTI":
      /*for (let i = nappulaI + 1; i < 8; i++) {
        for (let j = nappulaJ + 1; j < 8; j++) {
          if (voikoSiirtää(lauta, nappula.väri, i, j)) {
            uusiLauta = kopioi2dTaulukko(lauta);
            uusiLauta[nappulaI][nappulaJ] = null;
            uusiLauta[i][j] = nappula;
            palautettava.push(uusiLauta);

            if (!!lauta[i][nappulaJ]) break;
          } else {
            break;
          }
        }
      }

      for (let i = nappulaI + 1; i < 8; i++) {
        for (let j = nappulaJ - 1; j >= 0; j++) {
          if (voikoSiirtää(lauta, nappula.väri, i, j)) {
            uusiLauta = kopioi2dTaulukko(lauta);
            uusiLauta[nappulaI][nappulaJ] = null;
            uusiLauta[i][j] = nappula;
            palautettava.push(uusiLauta);

            if (!!lauta[i][nappulaJ]) break;
          } else {
            break;
          }
        }
      }

      for (let i = nappulaI - 1; i >= 0; i++) {
        for (let j = nappulaJ + 1; j < 8; j++) {
          if (voikoSiirtää(lauta, nappula.väri, i, j)) {
            uusiLauta = kopioi2dTaulukko(lauta);
            uusiLauta[nappulaI][nappulaJ] = null;
            uusiLauta[i][j] = nappula;
            palautettava.push(uusiLauta);

            if (!!lauta[i][nappulaJ]) break;
          } else {
            break;
          }
        }
      }

      for (let i = nappulaI - 1; i >= 0; i++) {
        for (let j = nappulaJ - 1; j >= 0; j++) {
          if (voikoSiirtää(lauta, nappula.väri, i, j)) {
            uusiLauta = kopioi2dTaulukko(lauta);
            uusiLauta[nappulaI][nappulaJ] = null;
            uusiLauta[i][j] = nappula;
            palautettava.push(uusiLauta);

            if (!!lauta[i][nappulaJ]) break;
          } else {
            break;
          }
        }
      }*/
      break;
    case "RATSU":
      for (let i = -2; i <= 2; i++) {
        for (let j = -2; j <= 2; j++) {
          if (i === 0 || j === 0 || i === j) continue;
          if (voikoSiirtää(lauta, nappula.väri, nappulaI + i, nappulaJ + j)) {
            uusiLauta = kopioi2dTaulukko(lauta);
            uusiLauta[nappulaI][nappulaJ] = null;
            uusiLauta[nappulaI + i][nappulaJ + j] = nappula;
            palautettava.push(uusiLauta);
          }
        }
      }
      break;
    case "SOTILAS":
      break;
    case "TORNI":
      for (let i = nappulaI + 1; i < 8; i++) {
        const onLaillinenSiirto = voikoSiirtää(
          lauta,
          nappula.väri,
          i,
          nappulaJ
        );

        if (onLaillinenSiirto) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][nappulaJ] = nappula;
          palautettava.push(uusiLauta);

          if (!!lauta[i][nappulaJ]) break;
        } else {
          break;
        }
      }

      for (let i = nappulaI - 1; i >= 0; i--) {
        const onLaillinenSiirto = voikoSiirtää(
          lauta,
          nappula.väri,
          i,
          nappulaJ
        );

        if (onLaillinenSiirto) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][nappulaJ] = nappula;
          palautettava.push(uusiLauta);

          if (!!lauta[i][nappulaJ]) break;
        } else {
          break;
        }
      }

      for (let j = nappulaJ + 1; j < 8; j++) {
        const onLaillinenSiirto = voikoSiirtää(
          lauta,
          nappula.väri,
          nappulaI,
          j
        );

        if (onLaillinenSiirto) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[nappulaI][j] = nappula;
          palautettava.push(uusiLauta);

          if (!!lauta[nappulaI][j]) break;
        } else {
          break;
        }
      }

      for (let j = nappulaJ - 1; j >= 0; j--) {
        const onLaillinenSiirto = voikoSiirtää(
          lauta,
          nappula.väri,
          nappulaI,
          j
        );

        if (onLaillinenSiirto) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[nappulaI][j] = nappula;
          palautettava.push(uusiLauta);

          if (!!lauta[nappulaI][j]) break;
        } else {
          break;
        }
      }
      break;
    default:
      console.log(nappula.tyyppi);
      throw new Error("Väärä nappulan tyyppi");
  }

  return palautettava;
};

const minimax = (
  lauta: Lauta,
  syvyys: number,
  alfa: number,
  beeta: number,
  siirronTekijä: Puoli = "MUSTA"
): [number, Lauta] => {
  if (syvyys === 0 /* TODO: tai peli on loppu */) {
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
          const [arvo, uusiLauta] = minimax(
            siirto,
            syvyys - 1,
            alfa,
            beeta,
            "VALKOINEN"
          );
          if (arvo > parhaanSiirronArvo) {
            parhaanSiirronArvo = arvo;
            parasPositio = uusiLauta;
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
          const [arvo, uusiLauta] = minimax(
            siirto,
            syvyys - 1,
            alfa,
            beeta,
            "VALKOINEN"
          );
          if (arvo < parhaanSiirronArvo) {
            parhaanSiirronArvo = arvo;
            parasPositio = uusiLauta;
          }
          alfa = Math.min(beeta, arvo);
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
