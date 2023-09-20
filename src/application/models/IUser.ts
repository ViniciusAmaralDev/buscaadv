import { IAddress } from "./IAddress";

export interface IUser {
  id?: string;
  type: string;
  name: string;
  photo: string;
  about: string;
  email: string;
  office?: string;
  password: string;
  gallery?: string[];
  address?: IAddress;
  createdAt?: string;
  updatedAt?: string;
  services?: string[];
  phoneNumber: string;
  openingHours?: {
    sunday: string[];
  };
  isAuthenticated?: boolean;
}
