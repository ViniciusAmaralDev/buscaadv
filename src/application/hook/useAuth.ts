import { useContext } from "react";
import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { ISignInProps } from "../models/ISignInProps";
import { ERequestStatus } from "../enums/ERequestStatus";
import { authService } from "../../infrastructure/services/auth";
import { useRequestStatus } from "../context/RequestStatusContext";

export const useAuth = () => {
  const { setRequestStatus } = useRequestStatus();
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password }: ISignInProps) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const user = await authService.signIn({ email, password });
      setUser(user);
      setRequestStatus(ERequestStatus.DONE);
    } catch (error) {
      console.log(error);
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const signUp = async (values: IUser) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const user = await authService.signUp(values);
      setUser(user);
      setRequestStatus(ERequestStatus.DONE);
    } catch (error) {
      console.log(error);
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const signOut = async () => {
    try {
      setUser(undefined);
      await authService.signOut(user.id);
    } catch (error) {}
  };

  return { user, signIn, signUp, signOut };
};
