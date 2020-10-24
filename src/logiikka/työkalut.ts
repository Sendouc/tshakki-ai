import { Lauta } from "../tyypit";

/**
 * Kopioi annettun taulukon ("deep copy")
 *
 * @param taulukko Kopioitava taulukko
 * @returns Kopioitu taulukko
 */
export const kopioi2dTaulukko = <T>(taulukko: T[][]) => {
  const palautettava = new Array(taulukko.length);
  for (let i = 0; i < taulukko.length; i++) {
    const lista = new Array(taulukko[i].length);
    for (let j = 0; j < taulukko[i].length; j++) {
      lista[j] = taulukko[i][j];
    }
    palautettava[i] = lista;
  }

  return palautettava;
};

/**
 * Onko peli loppu
 *
 * @param lauta Laudan tila tällä hetkellä
 * @returns Onko peli loppu vai ei
 */
export const onkoPeliLoppu = (lauta: Lauta) => {
  let kuninkaita = 0;
  for (const rivi of lauta) {
    for (const nappula of rivi) {
      if (nappula?.tyyppi === "KUNINGAS") kuninkaita++;
    }
  }

  return kuninkaita !== 2;
};
