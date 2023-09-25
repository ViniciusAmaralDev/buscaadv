import React, { PropsWithChildren, createContext, useState } from "react";
import { IAvaliationsContext } from "../models/IAvaliationsContext";
import { IAvaliation } from "../models/IAvaliation";

export const AvaliationsContext = createContext({} as IAvaliationsContext);

export const AvaliationsProvider = ({ children }: PropsWithChildren) => {
  const [avaliations, setAvaliations] = useState([] as IAvaliation[]);

  return (
    <AvaliationsContext.Provider value={{ avaliations, setAvaliations }}>
      {children}
    </AvaliationsContext.Provider>
  );
};
