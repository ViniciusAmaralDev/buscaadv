import { IUser } from "../models/IUser";
import { IAuthContext } from "../models/IAuthContext";
import React, {
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { userService } from "../../infrastructure/services/user";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const users = await userService.getAll();
      console.log(JSON.stringify(users, null, 2));
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
