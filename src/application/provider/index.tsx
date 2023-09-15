import { theme } from "../styles";
import React, { PropsWithChildren } from "react";

// PROVIDERS
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
import { RequestStatusProvider } from "../context/RequestStatusContext";
import { ToastProvider } from "../context/ToastContext";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <RequestStatusProvider>
          <AuthProvider>{children}</AuthProvider>
        </RequestStatusProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
