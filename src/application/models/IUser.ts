import { IAddress } from "./IAddress";
import { EUserType } from "../enums/EUserType";
import { IOpeningHours } from "./IOpeningHours";

export interface IUser {
  id?: string;
  name: string;
  photo: string;
  about: string;
  email: string;
  phone: string;
  type: EUserType;
  office?: string;
  password: string;
  gallery?: string[];
  address?: IAddress;
  createdAt?: string;
  updatedAt?: string;
  services?: string[];
  isAuthenticated?: boolean;
  openingHours?: IOpeningHours;
}
