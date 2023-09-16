import { IUser } from "../models/IUser";
import { IAuthContext } from "../models/IAuthContext";
import { userService } from "../../infrastructure/services/user";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();

  useEffect(() => {
    (async () => {
      const user = await userService.filter(`isAuthenticated == ${true}`);
      setUser(user);
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
