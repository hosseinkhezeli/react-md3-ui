type Theme = 'light' | 'dark';
export declare const ThemeContext: import("react").Context<{
    theme: Theme;
    toggleTheme: () => void;
}>;
export declare const useTheme: () => {
    theme: Theme;
    toggleTheme: () => void;
};
export {};
