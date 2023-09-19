import { IUser } from "../models/IUser";
import { IStorageContext } from "../models/IStorageContext";
import { userService } from "../../infrastructure/services/user";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import { useAuth } from "../hook/useAuth";

export const StorageContext = createContext({} as IStorageContext);

export const StorageProvider = ({ children }: PropsWithChildren) => {
  const { user } = useAuth();
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      setUsers(await userService.getAll());
    })();
  }, [user]);

  return (
    <StorageContext.Provider value={{ users, setUsers }}>
      {children}
    </StorageContext.Provider>
  );
};
