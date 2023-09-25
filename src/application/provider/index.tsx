import { theme } from "../styles";
import React, { PropsWithChildren } from "react";

// PROVIDERS
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "../context/AuthContext";
import { RequestStatusProvider } from "../context/RequestStatusContext";
import { ToastProvider } from "../context/ToastContext";
import { AlertProvider } from "../context/AlertContext";
import { StorageProvider } from "../context/StorageContext";
import { AvaliationsProvider } from "../context/AvaliationsContext";

export default function Provider({ children }: PropsWithChildren) {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <AlertProvider>
          <RequestStatusProvider>
            <AuthProvider>
              <StorageProvider>
                <AvaliationsProvider>{children}</AvaliationsProvider>
              </StorageProvider>
            </AuthProvider>
          </RequestStatusProvider>
        </AlertProvider>
      </ToastProvider>
    </ThemeProvider>
  );
}
