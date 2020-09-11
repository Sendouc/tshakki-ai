import { haeLautaTekoälynSiirronJälkeen } from ".";

it("palauttaa validin laudan", () => {
  expect(haeLautaTekoälynSiirronJälkeen()).not.toBeFalsy();
});
