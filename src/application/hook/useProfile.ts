import { useContext } from "react";
import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { userService } from "../../infrastructure/services/user";

export const useProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const updateUser = async (values: Partial<IUser>) => {
    await userService.update(user.id, values);
    setUser((user) => ({ ...user, ...values }));
  };

  return { updateUser };
};
