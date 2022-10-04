import { createContext, useState } from "react";
import { defaultTheme } from "react-native-whirlwind/dist/theme";
import CompHealthTheme from "../themes/compHealth.theme";
import DefaultTheme from "../themes/defaultTheme";
import { ITheme } from "../themes/themes.types";
import weatherbyTheme from "../themes/weatherby.theme";

interface IThemeContext {
  theme: ITheme;
  selectTheme: (theme: IThemes) => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: DefaultTheme,
  selectTheme: (theme: IThemes) => {
    throw new Error("Provider is not initialized");
  },
});

export type IThemes = "default" | "compHealth" | "weatherBy";

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(DefaultTheme);

  const selectTheme = (theme: IThemes) => {
    switch (theme) {
      case "default":
        setTheme(DefaultTheme);
        break;
      case "compHealth":
        setTheme(CompHealthTheme);
        break;
      case "weatherBy" :
        setTheme(weatherbyTheme)
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, selectTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
