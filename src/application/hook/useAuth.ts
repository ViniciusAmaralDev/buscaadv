import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ISignInProps } from "../models/ISignInProps";
import { ISignUpProps } from "../models/ISignUpProps";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password }: ISignInProps) => {
    try {
    } catch (error) {}
  };

  const signUp = async (values: ISignUpProps) => {
    try {
    } catch (error) {}
  };

  const signOut = async () => {
    try {
    } catch (error) {}
  };

  return { user, signIn, signUp, signOut };
};
