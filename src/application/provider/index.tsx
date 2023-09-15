import { theme } from "../styles";
import React, { PropsWithChildren } from "react";

// PROVIDERS
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
import { RequestStatusProvider } from "../context/RequestStatusContext";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <RequestStatusProvider>
        <AuthProvider>{children}</AuthProvider>
      </RequestStatusProvider>
    </ThemeProvider>
  );
}
