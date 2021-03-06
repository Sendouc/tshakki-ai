import { haeLautaTekoälynSiirronJälkeen } from ".";
import { Lauta } from "../tyypit";

const laudanTila: Lauta = [
  [
    {
      "väri": "VALKOINEN",
      "tyyppi": "TORNI"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "RATSU"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "LÄHETTI"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "KUNINGATAR"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "KUNINGAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "LÄHETTI"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "RATSU"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "TORNI"
    }
  ],
  [
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "VALKOINEN",
      "tyyppi": "SOTILAS"
    }
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null
  ],
  [
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "SOTILAS"
    }
  ],
  [
    {
      "väri": "MUSTA",
      "tyyppi": "TORNI"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "RATSU"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "LÄHETTI"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "KUNINGATAR"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "KUNINGAS"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "LÄHETTI"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "RATSU"
    },
    {
      "väri": "MUSTA",
      "tyyppi": "TORNI"
    }
  ]
]

it("palauttaa validin laudan", () => {
  const uusiLauta = haeLautaTekoälynSiirronJälkeen(laudanTila)

  expect(uusiLauta).not.toBeFalsy();
});

it("muuttaa lauttaa", () => {
  const uusiLauta = haeLautaTekoälynSiirronJälkeen(laudanTila)

  expect(JSON.stringify(uusiLauta)).not.toBe(JSON.stringify(laudanTila));
})

export { };

