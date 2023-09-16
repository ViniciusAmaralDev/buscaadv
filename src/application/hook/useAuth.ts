import { useContext } from "react";
import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { ISignInProps } from "../models/ISignInProps";
import { ERequestStatus } from "../enums/ERequestStatus";
import { authService } from "../../infrastructure/services/auth";
import { useRequestStatus } from "../context/RequestStatusContext";
import { useToast } from "../context/ToastContext";
import { userService } from "../../infrastructure/services/user";

export const useAuth = () => {
  const { showToast } = useToast();
  const { setRequestStatus } = useRequestStatus();
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password }: ISignInProps) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const user = await authService.signIn({ email, password });
      setUser(user);
      setRequestStatus(ERequestStatus.DONE);
    } catch (error: any) {
      showToast(error.message);
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const signUp = async (values: IUser) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      if (await userService.filter(`email == "${values.email}"`)) {
        throw new Error("Já existe um usuário cadastrado com este e-mail");
      }
      
      const user = await authService.signUp(values);
      setUser(user);
      setRequestStatus(ERequestStatus.DONE);
    } catch (error: any) {
      showToast(error.message);
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const signOut = async () => {
    try {
      setUser(undefined);
      await authService.signOut();
    } catch (error) {}
  };

  return { user, signIn, signUp, signOut };
};
