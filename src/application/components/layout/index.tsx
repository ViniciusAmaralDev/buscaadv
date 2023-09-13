import React, { ReactNode } from "react";
import { Container, View, ScrollView } from "./styles";
import { Platform, ScrollViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

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
  const { top } = useSafeAreaInsets();
  const paddingTop = paddingTopDisabled ? 0 : top + 16;
  const behavior = Platform.OS === "ios" ? "padding" : "height";

  return (
    <Container behavior={behavior} paddingTop={paddingTop}>
      <StatusBar style="auto" />

      {header && <>{header}</>}

      {scrollEnabled ? (
        <ScrollView {...rest}>{children}</ScrollView>
      ) : (
        <View {...rest}>{children}</View>
      )}
    </Container>
  );
};
