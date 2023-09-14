import { IUser } from "../models/IUser";
import { IAuthContext } from "../models/IAuthContext";
import React, { PropsWithChildren, createContext, useState } from "react";

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<IUser>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
