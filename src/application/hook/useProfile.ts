import { useContext } from "react";
import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { userService } from "../../infrastructure/services/user";

export const useProfile = () => {
  const { user, setUser } = useContext(AuthContext);

  const updateUser = async (id: string, values: Partial<IUser>) => {
    await userService.update(id, values);
    setUser((user) => ({ ...user, ...values }));
  };

  const deleteAccount = async () => {
    setUser(undefined);
    await userService.delete(user.id);
  };

  return { updateUser, deleteAccount };
};
