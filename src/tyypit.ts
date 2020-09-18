export type Puoli = "MUSTA" | "VALKOINEN";
export type NappulanTyyppi =
  | "SOTILAS"
  | "LÄHETTI"
  | "RATSU"
  | "TORNI"
  | "KUNINGATAR"
  | "KUNINGAS";

export type Lauta = (Nappula | null)[][];

export interface Nappula {
  väri: Puoli;
  tyyppi: NappulanTyyppi;
}
