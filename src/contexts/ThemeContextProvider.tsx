import { Theme, ThemeContextState } from "../types/themeTypes";
import { createContext, useState, useEffect } from "react";

const ThemeContext = createContext<ThemeContextState>({
    theme: "dark",
    toggleTheme: () => {},
});

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>("dark");

    const toggleTheme = () => setTheme(() => (theme === "light" ? "dark" : "light"));

    // needs to be done as an effect and not inside toggleTheme because of stale state
    useEffect(() => {
        const body = document.querySelector("body");
        if (!body) return;
        body.classList.add(theme === "light" ? "light" : "dark");
        body.classList.remove(theme === "light" ? "dark" : "light");
    }, [theme]);

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export { ThemeContext, ThemeContextProvider };
