const laudanTila = [
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
    null,
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
  [
    null,
    null,
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    null,
    null,
    null,
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    null,
    null,
    null,
    null,
    {
      väri: "MUSTA",
      tyyppi: "RATSU",
    },
    null,
    null,
  ],
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
    null,
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
    null,
    {
      väri: "MUSTA",
      tyyppi: "TORNI",
    },
  ],
];

it("palauttaa validin laudan", () => {
  expect(laudanTila).not.toBeFalsy();
});
