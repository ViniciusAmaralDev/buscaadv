import React, { ReactNode, useState } from "react";
import { Control, Controller, FieldError } from "react-hook-form";
import {
  Container,
  Content,
  ErrorText,
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
  error?: FieldError;
  control: Control<any>;
  variant?: InputVariant;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  labelStyle?: StyleProp<TextStyle>;
  forgotPassword?: () => void;
}

export const InputForm = ({
  name,
  error,
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

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {label && <Label style={labelStyle}>{label}</Label>}

      <Content variant={variant} isFocused={isFocused}>
        {startIcon && <>{startIcon}</>}

        <Controller
          control={control}
          name={name}
          render={({ field: { value, onBlur, onChange } }) => (
            <Input
              value={value}
              onChangeText={onChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
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

      {error && <ErrorText>{error.message}</ErrorText>}

      {!!forgotPassword && (
        <ForgotPasswordButton>esqueci a senha</ForgotPasswordButton>
      )}
    </Container>
  );
};
