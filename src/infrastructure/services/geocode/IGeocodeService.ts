import { ICoords } from "./ICoords";
import { AxiosPromise } from "axios";
import { IGeocodeResponse } from "./IGeocodeResponse";

export interface IGeocodeService {
  convertCoordinatesToAddress: (
    values: ICoords
  ) => AxiosPromise<IGeocodeResponse>;
  
  convertAddressToCoordinates: (
    address: string
  ) => AxiosPromise<IGeocodeResponse>;
}
