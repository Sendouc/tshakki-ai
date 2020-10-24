import { Lauta, Nappula, NappulanTyyppi, Puoli } from "../tyypit";
import { kopioi2dTaulukko } from "./työkalut";

/**
 * Palauttaa voiko annettuun ruutuun siirtää
 *
 * @param lauta Laudan tila tällä hetkellä
 * @param väri Siirron tekijä
 * @param i Nappulan "i" indeksi laudalla
 * @param j Nappulan "j" indeksi laudalla
 * @param saaAinoastaan Voiko nappula vain syödä tai liikkua ruutuun siirtyessä (sotilaan erikoistapaus)
 * @returns Voiko annettuun ruutuun siirtää
 */
const voikoSiirtää = (
  lauta: Lauta,
  väri: Puoli,
  i: number,
  j: number,
  saaAinoastaan?: "SYÖDÄ" | "LIIKKUA"
) => {
  // ei voida siirtää laudan ulkopuoelle
  if (i < 0 || j < 0 || i > 7 || j > 7) return false;

  const nappula = lauta[i][j];

  // ei voida syödä omaa nappulaa
  if (nappula?.väri === väri) return false;

  // sotilas voi liikkua tiettyihin ruutuihin vain syödessä
  const vastustajanVäri = väri === "MUSTA" ? "VALKOINEN" : "MUSTA";
  if (saaAinoastaan === "SYÖDÄ" && nappula?.väri !== vastustajanVäri)
    return false;

  // sotilas voi liikkua tiettyihin ruutuihin vain jos siinä ei ole mitään nappulaa
  if (saaAinoastaan === "LIIKKUA" && !!nappula) return false;

  return true;
};

export const siirtoGeneraattorit: Record<
  NappulanTyyppi,
  (
    lauta: Lauta,
    nappula: Nappula,
    nappulaI: number,
    nappulaJ: number
  ) => Generator<Lauta>
> = {
  KUNINGAS: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;

    if (voikoSiirtää(lauta, nappula.väri, nappulaI - 1, nappulaJ)) {
      uusiLauta = kopioi2dTaulukko(lauta);
      uusiLauta[nappulaI][nappulaJ] = null;
      uusiLauta[nappulaI - 1][nappulaJ] = nappula;
      yield uusiLauta;
    }

    if (voikoSiirtää(lauta, nappula.väri, nappulaI, nappulaJ - 1)) {
      uusiLauta = kopioi2dTaulukko(lauta);
      uusiLauta[nappulaI][nappulaJ] = null;
      uusiLauta[nappulaI][nappulaJ - 1] = nappula;
      yield uusiLauta;
    }

    if (voikoSiirtää(lauta, nappula.väri, nappulaI + 1, nappulaJ)) {
      uusiLauta = kopioi2dTaulukko(lauta);
      uusiLauta[nappulaI][nappulaJ] = null;
      uusiLauta[nappulaI + 1][nappulaJ] = nappula;
      yield uusiLauta;
    }

    if (voikoSiirtää(lauta, nappula.väri, nappulaI, nappulaJ + 1)) {
      uusiLauta = kopioi2dTaulukko(lauta);
      uusiLauta[nappulaI][nappulaJ] = null;
      uusiLauta[nappulaI][nappulaJ + 1] = nappula;
      yield uusiLauta;
    }
  },
  SOTILAS: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;

    if (nappula.väri === "VALKOINEN") {
      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI + 1, nappulaJ, "LIIKKUA")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI + 1][nappulaJ] = nappula;
        yield uusiLauta;
      }

      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI + 1, nappulaJ - 1, "SYÖDÄ")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI + 1][nappulaJ - 1] = nappula;
        yield uusiLauta;
      }

      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI + 1, nappulaJ + 1, "SYÖDÄ")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI + 1][nappulaJ + 1] = nappula;
        yield uusiLauta;
      }

      if (nappulaI === 1) {
        if (
          voikoSiirtää(lauta, nappula.väri, nappulaI + 2, nappulaJ, "LIIKKUA")
        ) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[nappulaI + 2][nappulaJ] = nappula;
          yield uusiLauta;
        }
      }
    } else {
      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI - 1, nappulaJ, "LIIKKUA")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI - 1][nappulaJ] = nappula;
        yield uusiLauta;
      }

      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI - 1, nappulaJ - 1, "SYÖDÄ")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI - 1][nappulaJ - 1] = nappula;
        yield uusiLauta;
      }

      if (
        voikoSiirtää(lauta, nappula.väri, nappulaI - 1, nappulaJ + 1, "SYÖDÄ")
      ) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI - 1][nappulaJ + 1] = nappula;
        yield uusiLauta;
      }

      if (nappulaI === 6) {
        if (
          voikoSiirtää(lauta, nappula.väri, nappulaI - 2, nappulaJ, "LIIKKUA")
        ) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[nappulaI - 2][nappulaJ] = nappula;
          yield uusiLauta;
        }
      }
    }
  },
  RATSU: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;

    for (let i = -2; i <= 2; i++) {
      for (let j = -2; j <= 2; j++) {
        if (i === 0 || j === 0 || i === j) continue;
        if (voikoSiirtää(lauta, nappula.väri, nappulaI + i, nappulaJ + j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[nappulaI + i][nappulaJ + j] = nappula;
          yield uusiLauta;
        }
      }
    }
  },
  KUNINGATAR: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;
    for (let i = nappulaI + 1; i < 8; i++) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, i, nappulaJ);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[i][nappulaJ] = nappula;
        yield uusiLauta;

        if (!!lauta[i][nappulaJ]) break;
      } else {
        break;
      }
    }

    for (let i = nappulaI - 1; i >= 0; i--) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, i, nappulaJ);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[i][nappulaJ] = nappula;
        yield uusiLauta;

        if (!!lauta[i][nappulaJ]) break;
      } else {
        break;
      }
    }

    for (let j = nappulaJ + 1; j < 8; j++) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, nappulaI, j);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][j] = nappula;
        yield uusiLauta;

        if (!!lauta[nappulaI][j]) break;
      } else {
        break;
      }
    }

    for (let j = nappulaJ - 1; j >= 0; j--) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, nappulaI, j);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][j] = nappula;
        yield uusiLauta;

        if (!!lauta[nappulaI][j]) break;
      } else {
        break;
      }
    }

    loop: for (let i = nappulaI + 1; i < 8; i++) {
      for (let j = nappulaJ + 1; j < 8; j++) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI + 1; i < 8; i++) {
      for (let j = nappulaJ - 1; j >= 0; j--) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI - 1; i >= 0; i--) {
      for (let j = nappulaJ + 1; j < 8; j++) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI - 1; i >= 0; i--) {
      for (let j = nappulaJ - 1; j >= 0; j--) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }
  },
  TORNI: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;
    for (let i = nappulaI + 1; i < 8; i++) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, i, nappulaJ);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[i][nappulaJ] = nappula;
        yield uusiLauta;

        if (!!lauta[i][nappulaJ]) break;
      } else {
        break;
      }
    }

    for (let i = nappulaI - 1; i >= 0; i--) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, i, nappulaJ);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[i][nappulaJ] = nappula;
        yield uusiLauta;

        if (!!lauta[i][nappulaJ]) break;
      } else {
        break;
      }
    }

    for (let j = nappulaJ + 1; j < 8; j++) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, nappulaI, j);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][j] = nappula;
        yield uusiLauta;

        if (!!lauta[nappulaI][j]) break;
      } else {
        break;
      }
    }

    for (let j = nappulaJ - 1; j >= 0; j--) {
      const onLaillinenSiirto = voikoSiirtää(lauta, nappula.väri, nappulaI, j);

      if (onLaillinenSiirto) {
        uusiLauta = kopioi2dTaulukko(lauta);
        uusiLauta[nappulaI][nappulaJ] = null;
        uusiLauta[nappulaI][j] = nappula;
        yield uusiLauta;

        if (!!lauta[nappulaI][j]) break;
      } else {
        break;
      }
    }
  },
  LÄHETTI: function* (lauta, nappula, nappulaI, nappulaJ) {
    let uusiLauta: Lauta | null = null;

    loop: for (let i = nappulaI + 1; i < 8; i++) {
      for (let j = nappulaJ + 1; j < 8; j++) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI + 1; i < 8; i++) {
      for (let j = nappulaJ - 1; j >= 0; j--) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI - 1; i >= 0; i--) {
      for (let j = nappulaJ + 1; j < 8; j++) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }

    loop: for (let i = nappulaI - 1; i >= 0; i--) {
      for (let j = nappulaJ - 1; j >= 0; j--) {
        if (voikoSiirtää(lauta, nappula.väri, i, j)) {
          uusiLauta = kopioi2dTaulukko(lauta);
          uusiLauta[nappulaI][nappulaJ] = null;
          uusiLauta[i][j] = nappula;
          yield uusiLauta;

          if (!!lauta[i][j]) break;
        } else {
          break loop;
        }
      }
    }
  },
};
