import { Lauta } from "../tyypit";
import { siirtoGeneraattorit } from "./siirtoGeneraattorit";

const laudanTila: Lauta = [
  [
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "KUNINGATAR",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "KUNINGAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "RATSU",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "TORNI",
    },
  ],
  [
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "SOTILAS",
    },
  ],
  [
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGATAR",
    },
    {
      väri: "MUSTA",
      tyyppi: "KUNINGAS",
    },
    {
      väri: "MUSTA",
      tyyppi: "LÄHETTI",
    },
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
  ],
];

it.only("nappuloilla oikea määrä aloitusvaihtoehtoja", () => {
  const ratsuSiirrot = [
    ...siirtoGeneraattorit["RATSU"](
      laudanTila,
      {
        väri: "MUSTA",
        tyyppi: "RATSU",
      },
      7,
      6
    ),
  ];

  expect(ratsuSiirrot.length).toBe(2);

  const kuningasSiirrot = [
    ...siirtoGeneraattorit["KUNINGAS"](
      laudanTila,
      {
        väri: "MUSTA",
        tyyppi: "KUNINGAS",
      },
      7,
      4
    ),
  ];

  expect(kuningasSiirrot.length).toBe(0);

  const torniSiirrot = [
    ...siirtoGeneraattorit["TORNI"](
      laudanTila,
      {
        väri: "MUSTA",
        tyyppi: "TORNI",
      },
      7,
      0
    ),
  ];

  expect(torniSiirrot.length).toBe(0);

  const kuningatarSiirrot = [
    ...siirtoGeneraattorit["KUNINGATAR"](
      laudanTila,
      {
        väri: "MUSTA",
        tyyppi: "KUNINGATAR",
      },
      7,
      3
    ),
  ];

  expect(kuningatarSiirrot.length).toBe(0);

  const sotilasSiirrot = [
    ...siirtoGeneraattorit["SOTILAS"](
      laudanTila,
      {
        väri: "MUSTA",
        tyyppi: "SOTILAS",
      },
      6,
      0
    ),
  ];

  expect(sotilasSiirrot.length).toBe(2);
});

export {};
