export type Theme = "light" | "dark";

export type ThemeContextState = {
    theme: Theme;
    toggleTheme: () => void;
};
