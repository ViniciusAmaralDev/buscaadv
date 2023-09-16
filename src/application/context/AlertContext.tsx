import { useTheme } from "styled-components";
import AwesomeAlert from "react-native-awesome-alerts";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useState,
} from "react";
import { AlertOptions, IAlertContext } from "../models/IAlertContext";

const Context = createContext({} as IAlertContext);

export const AlertProvider = ({ children }: PropsWithChildren) => {
  const theme = useTheme();

  const [isVisible, setIsVisible] = useState(false);
  const [options, setOptions] = useState({} as AlertOptions);

  const showAlert = (options: AlertOptions) => {
    setIsVisible(true);
    setOptions(options);
  };

  return (
    <Context.Provider value={{ showAlert }}>
      {children}
      <AwesomeAlert
        closeOnTouchOutside
        show={isVisible}
        message={options?.message ?? ""}
        title={options?.title ?? ""}
        closeOnHardwareBackPress={false}
        onDismiss={() => setIsVisible(false)}
        showCancelButton={!!options.leftButton}
        cancelText={options?.leftButton?.label ?? ""}
        cancelButtonStyle={{
          paddingHorizontal: 24,
        }}
        cancelButtonTextStyle={{
          color: options?.leftButton?.textColor ?? theme.colors.white.main,
        }}
        cancelButtonColor={
          options?.leftButton?.backgroundColor ?? theme.colors.red.main
        }
        onCancelPressed={async () => {
          if (options?.leftButton?.onPress) {
            await options?.leftButton?.onPress();
          }
          setIsVisible(false);
        }}
        showConfirmButton={!!options.rightButton}
        confirmText={options?.rightButton?.label ?? ""}
        confirmButtonStyle={{
          paddingHorizontal: 24,
        }}
        confirmButtonTextStyle={{
          color: options?.rightButton?.textColor ?? theme.colors.white.main,
        }}
        confirmButtonColor={
          options?.rightButton?.backgroundColor ?? theme.colors.green.main
        }
        onConfirmPressed={async () => {
          if (options?.rightButton?.onPress) {
            await options?.rightButton?.onPress();
          }
          setIsVisible(false);
        }}
      />
    </Context.Provider>
  );
};

export const useAlert = () => useContext(Context);
