import { Nappula } from "../tyypit";
import { haeLautaTekoälynSiirronJälkeen } from "./index";

const laudanAloitusTila = [
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
    null,
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
    null,
    null,
    {
      väri: "VALKOINEN",
      tyyppi: "SOTILAS",
    },
    null,
    null,
  ],
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
] as Nappula[][];

haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 1);

console.time("miniMaxDepth1");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 1);
console.timeEnd("miniMaxDepth1");

console.time("miniMaxDepth2");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 2);
console.timeEnd("miniMaxDepth2");

console.time("miniMaxDepth3");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 3);
console.timeEnd("miniMaxDepth3");

console.time("miniMaxDepth4");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 4);
console.timeEnd("miniMaxDepth4");

console.time("miniMaxDepth5");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 5);
console.timeEnd("miniMaxDepth5");

console.time("miniMaxDepth6");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 6);
console.timeEnd("miniMaxDepth6");

console.time("miniMaxDepth7");
haeLautaTekoälynSiirronJälkeen(laudanAloitusTila, 7);
console.timeEnd("miniMaxDepth7");

export {};
