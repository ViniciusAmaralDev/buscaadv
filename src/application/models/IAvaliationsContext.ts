import { IAvaliation } from "./IAvaliation";

export interface IAvaliationsContext {
  avaliations: IAvaliation[];
  setAvaliations: React.Dispatch<React.SetStateAction<IAvaliation[]>>;
}
