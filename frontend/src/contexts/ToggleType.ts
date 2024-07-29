export type Toggle = boolean;

export type ToggleContextType = {
    toggle: Toggle;
    toggleMenu: () => void;
};

export const toggles: { default: Toggle, open: Toggle } = {
    default: false,
    open: true
};
