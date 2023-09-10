import { theme } from "../styles";
import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

export default function Provider({ children }: PropsWithChildren) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
