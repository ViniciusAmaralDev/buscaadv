import { IUser } from "../models/IUser";
import { IAuthContext } from "../models/IAuthContext";
import React, {
  useState,
  useEffect,
  createContext,
  PropsWithChildren,
} from "react";
import { userService } from "../../infrastructure/services/user";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();
  // console.log("USER =>", JSON.stringify(user, null, 2));

  useEffect(() => {
    (async () => {
      // await userService.update("c035ee87-0c5a-4a55-9385-99a35550bf28", {
      //   isAuthenticated: false,
      // });
      setUser(await userService.filter(`isAuthenticated == ${true}`));
      // setUser(undefined);
      // await userService.delete("ea78320c-7207-4669-b39e-c89af6a01629");
      // const users = await userService.getAll();
      // console.log("REALM =>", JSON.stringify(users, null, 2));
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
