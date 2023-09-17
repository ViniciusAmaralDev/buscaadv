import React, { ReactNode, useState } from "react";
import { StyleProp, TextStyle } from "react-native";
import { Control, Controller, FieldError } from "react-hook-form";
import {
  Label,
  Content,
  EyeIcon,
  Container,
  ErrorText,
  ForgotPasswordButton,
} from "./styles";

// COMPONENTS
import { Input } from "../base/input";
import { Button } from "../base/button";
import { MaskInputProps } from "react-native-mask-input";

type ReactElement = JSX.Element | ReactNode;

export type InputVariant = "contained" | "underline" | "text";

export interface InputFormProps extends MaskInputProps {
  name: string;
  label?: string;
  error?: FieldError;
  contrast?: boolean;
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
  contrast,
  editable = true,
  startIcon,
  labelStyle,
  defaultValue,
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

      <Content
        variant={variant}
        editable={editable}
        contrast={contrast}
        isFocused={isFocused}
      >
        {startIcon && <>{startIcon}</>}

        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange } }) => (
            <Input
              editable={editable}
              onChangeText={onChange}
              value={value ?? defaultValue}
              secureTextEntry={showPassword}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
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
