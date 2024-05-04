"use client";
import { createContext, useContext } from "react";
// Now here we will create the client component which will going to provide the context for the application

// creating app context default value
type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};
const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

// Creating Theme context which we will provide inside the application
const ThemeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
