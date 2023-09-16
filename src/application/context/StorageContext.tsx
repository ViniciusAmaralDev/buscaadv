import { IUser } from "../models/IUser";
import { IStorageContext } from "../models/IStorageContext";
import { userService } from "../../infrastructure/services/user";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";

export const StorageContext = createContext({} as IStorageContext);

export const StorageProvider = ({ children }: PropsWithChildren) => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    (async () => {
      setUsers(await userService.getAll());
    })();
  }, []);

  return (
    <StorageContext.Provider value={{ users, setUsers }}>
      {children}
    </StorageContext.Provider>
  );
};
