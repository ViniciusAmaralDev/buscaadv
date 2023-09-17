import { AxiosPromise } from "axios";
import { IViacepResponse } from "./IViacepResponse";

export interface IViacepService {
  convertZipCodeToAddress: (zipCode: number) => AxiosPromise<IViacepResponse>;
}
