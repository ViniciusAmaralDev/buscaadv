import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ISignInProps } from "../models/ISignInProps";
import { ISignUpProps } from "../models/ISignUpProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IUser } from "../models/IUser";

export const useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const signIn = async ({ email, password }: ISignInProps) => {
    try {
      const userStorage = await AsyncStorage.getItem("users");
      if (!userStorage) return;

      const users = (JSON.parse(userStorage) ?? []) as IUser[];
      const user = users.find((user) => user.email === email);
      if (!user || user.email !== email || user.password !== password) return;

      setUser(user);
      await AsyncStorage.setItem("user", JSON.stringify(user));
    } catch (error) {}
  };

  const signUp = async (values: ISignUpProps) => {
    try {
      const userStorage = await AsyncStorage.getItem("users");
      const users = (!userStorage ? [] : JSON.parse(userStorage)) as IUser[];

      await AsyncStorage.setItem("users", JSON.stringify([...users, values]));
      await AsyncStorage.setItem("user", JSON.stringify(values));

      setUser(values);
    } catch (error) {}
  };

  const signOut = async () => {
    try {
      setUser(undefined);
      await AsyncStorage.removeItem("user");
    } catch (error) {}
  };

  return { user, signIn, signUp, signOut };
};
