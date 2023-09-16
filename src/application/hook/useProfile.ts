import { useContext } from "react";
import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { userService } from "../../infrastructure/services/user";
import { useToast } from "../context/ToastContext";

export const useProfile = () => {
  const { showToast } = useToast();
  const { user, setUser } = useContext(AuthContext);

  const updateUser = async (id: string, values: Partial<IUser>) => {
    const updatedUser = { ...values, updatedAt: new Date().toString() };
    await userService.update(id, updatedUser);
    showToast("Atualizado com sucesso!");
    setUser((user) => ({ ...user, ...updatedUser }));
  };

  const deleteAccount = async () => {
    setUser(undefined);
    showToast("Conta excluída com sucesso!");
    await userService.delete(user.id);
  };

  return { updateUser, deleteAccount };
};
