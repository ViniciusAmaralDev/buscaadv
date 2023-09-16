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
  address?: IAddress;
  createdAt?: string;
  updatedAt?: string;
  phoneNumber: string;
  isAuthenticated?: boolean;
}
