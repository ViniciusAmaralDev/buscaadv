import { ISignInProps } from "./ISignInProps";

export interface ISignUpProps extends ISignInProps {
  type: string;
  name: string;
}
