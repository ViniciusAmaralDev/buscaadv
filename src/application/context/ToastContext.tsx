import Toast from "react-native-easy-toast";
import { IToastContext } from "../models/IToastContext";
import React, {
  useRef,
  useContext,
  createContext,
  PropsWithChildren,
} from "react";

const ToastContext = createContext({} as IToastContext);

export const ToastProvider = ({ children }: PropsWithChildren) => {
  const ref = useRef<Toast>(null);

  const showToast = (message: string) => {
    ref.current.show(message, 2500);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <Toast ref={ref} position="top" />
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);
