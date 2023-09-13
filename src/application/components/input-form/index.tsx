import React, { ReactNode, useState } from "react";
import { Control, Controller } from "react-hook-form";
import {
  Container,
  Content,
  EyeIcon,
  ForgotPasswordButton,
  Label,
} from "./styles";
import { StyleProp, TextInputProps, TextStyle } from "react-native";

// COMPONENTS
import { Input } from "../base/input";
import { Button } from "../base/button";

type ReactElement = JSX.Element | ReactNode;

export type InputVariant = "contained" | "underline" | "text";

export interface InputFormProps extends TextInputProps {
  name: string;
  label?: string;
  control: Control<any>;
  variant?: InputVariant;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  labelStyle?: StyleProp<TextStyle>;
  forgotPassword?: () => void;
}

export const InputForm = ({
  name,
  label,
  control,
  endIcon,
  startIcon,
  labelStyle,
  variant = "contained",
  forgotPassword,
  ...rest
}: InputFormProps) => {
  const isPassword = name.toLowerCase().includes("password");
  const [showPassword, setShowPassword] = useState(isPassword);

  return (
    <Container>
      {label && <Label style={labelStyle}>{label}</Label>}

      <Content variant={variant}>
        {startIcon && <>{startIcon}</>}

        <Controller
          control={control}
          name={name}
          render={({ field: { value, onBlur, onChange } }) => (
            <Input
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              secureTextEntry={showPassword}
              {...rest}
            />
          )}
        />

        {endIcon && <>{endIcon}</>}

        {isPassword && !endIcon && (
          <Button onPress={() => setShowPassword((value) => !value)}>
            <EyeIcon isVisible={!showPassword} />
          </Button>
        )}
      </Content>

      {!!forgotPassword && (
        <ForgotPasswordButton>esqueci a senha</ForgotPasswordButton>
      )}
    </Container>
  );
};
