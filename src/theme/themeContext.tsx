import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type TThemeContext = {
  theme: ETheme;
  toggleTheme: () => void;
  isDarkMode: boolean;
};

enum ETheme {
  LIGHT = "LIGHT",
  DARK = "DARk",
}

const ThemeContext = createContext<TThemeContext>({
  theme: ETheme.LIGHT,
  isDarkMode: false,
  toggleTheme: () => {},
});

export const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState(ETheme.DARK);

  const toggleTheme = () =>
    setTheme((prev) => (prev === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT));

  const isDarkMode = theme === ETheme.DARK;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Should be  wrapped inside ThemeProvider");
  }

  return context;
};
