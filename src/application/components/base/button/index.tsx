import React from "react";
import { TouchableOpacity } from "./styles";
import { ActivityIndicator, TouchableOpacityProps } from "react-native";
import { useTheme } from "styled-components";

export interface ButtonProps extends TouchableOpacityProps {
  isLoading?: boolean;
  loaderColor?: string;
  loaderSize?: "small" | "large";
}

export const Button = ({
  children,
  isLoading,
  loaderColor,
  loaderSize = "small",
  ...rest
}: ButtonProps) => {
  const theme = useTheme();

  return (
    <TouchableOpacity {...rest}>
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={loaderColor ?? theme.colors.white.main}
        />
      ) : (
        <>{children}</>
      )}
    </TouchableOpacity>
  );
};
