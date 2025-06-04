import React, { createContext, useContext, useState, ReactNode } from "react";

type Theme = "light" | "dark";
type Colors = {
  background: string;
  text: string;
};

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  colors: Colors;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const lightTheme = {
  background: "#fff",
  text: "#000",
};

const darkTheme = {
  background: "#212121",
  text: "#ccc",
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ theme, setTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
