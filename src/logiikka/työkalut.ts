export const kopioi2dTaulukko = <T>(taulukko: T[][]) => {
  const palautettava = [];
  for (let i = 0; i < taulukko.length; i++) {
    const lista = taulukko[i];
    palautettava.push([...lista]);
  }

  return palautettava;
};
