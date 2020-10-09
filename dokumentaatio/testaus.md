# Mitä on testattu, miten tämä tehtiin

Testaukseen on käytetty jest-kirjastoa. Suorituskykyä testattu antamalla eri parametrein syötteitä minimax-algoritmille.

# Minkälaisilla syötteillä testaus tehtiin

- Varsinaisissa testeissä käytetty laudan lähtötilaa. Sitä käyttämällä on helppo tietää, mitä eri funktioiden tulisi palauttaa jos ne toimivat oikein.

- Suorituskykytesteissä minimax eri syvyyksillä: 1-4 ottaen syötteeksi shakin alkutilanne.

# Miten testit voidaan toistaa

Käyttämällä komentoa `npm test` tai `npm run test:suorituskyky`.

# Ohjelman toiminnan empiirisen testauksen tulosten esittäminen graafisessa muodossa.
