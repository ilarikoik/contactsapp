import React, { ReactNode } from "react";
import { UserProvider } from "./userContext";
import { ThemeProvider } from "./themeContext";
import { EventProvider } from "./eventContext";

export const AppProviders = ({ children }: { children: ReactNode }) => {
  return (
    <EventProvider>
      <UserProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </UserProvider>
    </EventProvider>
  );
};
