# Mitä on testattu, miten tämä tehtiin

Testaukseen on käytetty jest-kirjastoa. Testeissä pyritty varmistamaan että funktiot palauttavat oikeita palautteita erityisesti, kun syötteenä on laudan aloitustila.

Suorituskykyä testattu antamalla eri parametrein syötteitä minimax-algoritmille.

# Minkälaisilla syötteillä testaus tehtiin

- Varsinaisissa testeissä käytetty laudan lähtötilaa. Sitä käyttämällä on helppo tietää, mitä eri funktioiden tulisi palauttaa jos ne toimivat oikein.

- Suorituskykytesteissä minimax eri syvyyksillä: 1-7 ottaen syötteeksi shakin alkutilanne.

Nähdään että varsinkin seitsemännellä syvyydellä aika on tällä syötteellä kasvanut räjähdysmäisesti:

![Minimax-syvyys vs. aika](https://raw.githubusercontent.com/Sendouc/tshakki-ai/master/dokumentaatio/syvyys.png)

# Miten testit voidaan toistaa

Käyttämällä komentoa `npm test` tai `npm run test:suorituskyky`.
