import { createContext, useState } from "react";
import defaultTheme from "../themes/default.theme";
import tenant1Theme from "../themes/compHealth.theme";
import tenant2Theme from "../themes/weatherBy.theme";

interface IThemeContext {
  theme: typeof tenant1Theme;
  changeTheme: (theme: ITheme) => void;
}

type ITheme = "default" | "compHealth" | "weatherBy";

const ThemeContext = createContext<IThemeContext>({
  theme: tenant1Theme,
  changeTheme: (theme: ITheme) => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(tenant1Theme);
  const changeTheme = (theme: ITheme) => {
    switch (theme) {
      case "default":
        setTheme(defaultTheme);
        break;
      case "compHealth":
        setTheme(tenant1Theme);
        break;
      case "weatherBy":
        setTheme(tenant2Theme);
        break;
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
