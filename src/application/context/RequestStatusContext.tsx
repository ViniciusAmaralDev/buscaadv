import { ERequestStatus } from "../enums/ERequestStatus";
import { IRequestStatusContext } from "../models/IRequestStatusContext";
import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

const RequestStatusContext = createContext({} as IRequestStatusContext);

export const RequestStatusProvider = ({ children }: PropsWithChildren) => {
  const [requestStatus, setRequestStatus] = useState(ERequestStatus.STAND_BY);
  const isLoading = requestStatus === ERequestStatus.PENDING;

  return (
    <RequestStatusContext.Provider value={{ isLoading, setRequestStatus }}>
      {children}
    </RequestStatusContext.Provider>
  );
};

export const useRequestStatus = () => useContext(RequestStatusContext);
