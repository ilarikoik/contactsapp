import React, { ReactNode } from "react";
import { UserProvider } from "./userContext";
import { ThemeProvider } from "./themeContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <UserProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </UserProvider>
  );
};
