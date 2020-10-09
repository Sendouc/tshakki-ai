## Opinto-ohjelma

Tietojenkäsittelytieteen kandidaatti

## Projektin kieli

suomi

## Aihe

Shakkitekoäly jota vastaan voidaan pelata. Tavoitteena on saada aikaan tekoäly, joka antaa suhteellisen heikolle shakin pelaajalle vastuksen. Kielenä on TypeScript. UI-kirjastona käytetään Reactia.

## Algoritmit ja tietorakenteet

Tekoälyn ratkaisujen tekemiseen käytetään Minimax-algoritmia. Algoritmia tehostetaan alfa-beeta-karsinnalla. Näin mahdollistetaan potentiaalisesti parempi hakusyvyys Minimax-algoritmissa.

Minimax-algoritmi valittiin, koska siitä löytyy parhaiten materiaalia.

Tarvittavat tietorakenteet varmaankin selvenevät tehdessä. Taulukolla ja muuttujilla pitäisi päästä aika pitkälle.

## Syötteet

Shakkia pelataan [react-chess](https://github.com/rexxars/react-chess) kirjaston avulla. Kun käyttäjä vuorollaan tekee siirron ohjelmia kutsuu metodia, josta saadaan tietokoneen seuraava siirto.

## Tavoitteena olevat aika- ja tilavaativuudet

Rajoittavana tekijänä on Minimax-algoritmi. Arvioidaan kompleksiuuksia, kun **b** on mahdollisten siirtojen määrä ja **m** on puun maksimisyvyys.

**Aikakompleksisuus**: O(b<sup>m</sup>)  
**Tilakompleksisuus**: O(bm)

Puun maksimisyvyys kasvattaa siis aikakompleksisuutta nopeasti. Kuitenkin algoritmin hyvyyden kannalta on olennaista, että syvyys on riittävä. Alfa-beeta-karsinnalla pyritään siihen, että keskimääräinen aikakompleksisuus ei nouse lähelle ylärajaa.

## Lähteet

[Tirakirja](https://www.cs.helsinki.fi/u/ahslaaks/tirakirja/)  
[The CIS603-Artificial Intelligence -kurssin materiaali](https://cis.temple.edu/~vasilis/Courses/CIS603/Lectures/l7.html)
