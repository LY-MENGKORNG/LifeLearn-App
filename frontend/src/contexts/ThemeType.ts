export type Theme = {
    foreground: string;
    background: string;
};

export type ThemeContextType = {
    theme: Theme;
    toggleTheme: () => void;
};

export const themes: { light: Theme; dark: Theme } = {
    light:  {
        foreground: '#000000',
        background: '#ffffff',
    },
    dark: {
        foreground: '#ffffff',
        background: '#000000',
    },
};
