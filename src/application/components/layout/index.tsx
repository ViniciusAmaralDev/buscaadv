import React, { ReactNode } from "react";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "styled-components";
import { Container, View, ScrollView } from "./styles";
import { Platform, ScrollViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface LayoutProps extends ScrollViewProps {
  paddingTopDisabled?: boolean;
  header?: JSX.Element | ReactNode;
}

export const Layout = ({
  children,
  header,
  scrollEnabled,
  paddingTopDisabled,
  ...rest
}: LayoutProps) => {
  const theme = useTheme();
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopDisabled ? 0 : top + 16;
  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <Container behavior={behavior} paddingTop={paddingTop}>
      <StatusBar style="light" backgroundColor={theme.colors.primary.dark} />

      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView {...rest}>{children}</ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}
    </Container>
  );
};
