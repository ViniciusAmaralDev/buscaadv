import { IUser } from "../models/IUser";
import { AuthContext } from "../context/AuthContext";
import { ERequestStatus } from "../enums/ERequestStatus";

// HOOKS
import { useContext } from "react";
import { useToast } from "../context/ToastContext";
import { userService } from "../../infrastructure/services/user";
import { useRequestStatus } from "../context/RequestStatusContext";

export const useProfile = () => {
  const { showToast } = useToast();
  const { setRequestStatus } = useRequestStatus();
  const { user, setUser } = useContext(AuthContext);

  const updateUser = async (id: string, values: Partial<IUser>) => {
    setRequestStatus(ERequestStatus.PENDING);
    try {
      const updatedUser = { ...values, updatedAt: new Date().toString() };
      await userService.update(id, updatedUser);
      showToast("Atualizado com sucesso!");
      setUser((user) => ({ ...user, ...updatedUser }));
      setRequestStatus(ERequestStatus.DONE);
    } catch (error) {
      setRequestStatus(ERequestStatus.ERROR);
    }
  };

  const deleteAccount = async () => {
    setUser(undefined);
    showToast("Conta excluída com sucesso!");
    await userService.delete(user.id);
  };

  return { updateUser, deleteAccount };
};
