import { ISignInRequest } from "./ISignInRequest";
import { IUser } from "../../../application/models/IUser";

export interface IAuthService {
  signOut: () => Promise<void>;
  signUp: (value: IUser) => Promise<IUser>;
  signIn: (values: ISignInRequest) => Promise<IUser>;
}
