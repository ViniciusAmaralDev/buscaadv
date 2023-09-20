import React, { ReactNode, useState } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";
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
import { SelectInput } from "../select-input";

type ReactElement = JSX.Element | ReactNode;

export type InputVariant = "contained" | "underline" | "text";

interface IValue {
  label: string;
  value: string;
}

export interface InputFormProps extends MaskInputProps {
  name: string;
  label?: string;
  values?: IValue[];
  error?: FieldError;
  contrast?: boolean;
  control?: Control<any>;
  selectedValue?: string;
  variant?: InputVariant;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  isConventionalMode?: boolean;
  labelStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
  forgotPassword?: () => void;
  onSelect?: (value: IValue) => void;
}

export const InputForm = ({
  name,
  error,
  label,
  values,
  control,
  endIcon,
  contrast,
  startIcon,
  labelStyle,
  defaultValue,
  selectedValue,
  containerStyle,
  editable = true,
  isConventionalMode,
  variant = "contained",
  onPress,
  onSelect,
  forgotPassword,
  ...rest
}: InputFormProps) => {
  const isPassword = name?.toLowerCase()?.includes("password");
  const [showPassword, setShowPassword] = useState(isPassword);

  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container
      style={containerStyle}
      onPress={() => {
        if (onPress) onPress();
      }}
    >
      {isConventionalMode && label && <Label style={labelStyle}>{label}</Label>}

      <Content
        variant={variant}
        editable={editable}
        contrast={contrast}
        isFocused={isFocused}
      >
        {startIcon && <>{startIcon}</>}

        {!isConventionalMode && label && (
          <Label isFocused={isFocused} style={labelStyle}>
            {label}
          </Label>
        )}

        {!!values ? (
          <SelectInput
            contrast
            data={values}
            value={selectedValue}
            onChange={onSelect}
            style={{
              paddingRight: -16,
              paddingLeft: -16,
              backgroundColor: "transparent",
            }}
          />
        ) : (
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
        )}

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
