import { createContext, useState } from "react";
import tenant1Theme from "../themes/tenant1.theme";
import tenant2Theme from "../themes/tenant2.theme";

interface IThemeContext {
  theme: typeof tenant1Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<IThemeContext>({
  theme: tenant1Theme,
  toggleTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(tenant1Theme);
  const toggleTheme = () =>{
    setTheme(theme === tenant1Theme ? tenant2Theme : tenant1Theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
