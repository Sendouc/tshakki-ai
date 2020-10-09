## Ohjelman yleisrakenne

UI-toteutettu React-kirjastolla.

`logiikka` kansiossa kaikki algoritmiin liittyvä koodi.

- `index.ts` sisältää algoritmin "entry pointin" ja algoritmin perus rakenteen
- `siirtoGeneraattorit.ts` sisältää eri nappuloiden mahdolliset siirrot palauttavat funktiot
- `työkalut.ts` sisältää satunnaisia apufunktioita

### Testit:

- `*.test.ts` sisältää tiedoston \* testit
- `suorituskykytestit.ts` sisältää suorituskykyyn liittyvät testit

## Saavutetut aika- ja tilavaativuudet (m.m. O-analyysit pseudokoodista)

### Aikakompleksisuus

Tavoiteltu aikakompleksisuus oli siis O(b<sup>m</sup>), kun **b** on mahdollisten siirtojen määrä ja **m** on puun maksimisyvyys.

Pseudokoodilla ohjelman toiminta on jotain seuraavaa mitä tulee seuraavan siirron tekemiseen (alfa-beeta-karsinta jätetty pois, koska sehän vain optimoi eikä paranna huonointa tilannetta).

`minimax`-funktio jota kutsutaan rekursiivisesti. Funktion kutsut muodostavat puun, jossa esiintyy **b**:n verran lehtiä per kerros ja syvyys on maksimissaan **m** (käyttäjä määrittelee sen kutsuessa minimax-funktiota ensimmäisen kerran). Tästä johtuen pidän realistisena, että tavoiteltu aikakompleksisuus on saavutettu.

### Tilakompleksisuus

Tavoiteltu tilakompleksisuus oli O(bm).

Uskoakseni tämä on myös saavutettu. Tarvittava tila kasva lineaarisesti, mitä syvempi puu on. Toisaalta kultakin tasolta pidetään muistissa laudan tila.

## Työn mahdolliset puutteet ja parannusehdotukset

TBD

## Lähteet

[Tirakirja](https://www.cs.helsinki.fi/u/ahslaaks/tirakirja/)
