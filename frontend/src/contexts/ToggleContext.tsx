import React, { createContext, useContext, useState, ReactNode } from 'react';
import { toggles, ToggleContextType, Toggle } from './ToggleType';
const ToggleContext = createContext<ToggleContextType | undefined>(undefined);


type ToggleProviderProps = {
  children: ReactNode;
};

const ToggleProvider: React.FC<ToggleProviderProps> = ({ children }) => {
  const [toggle, setToggle] = useState<Toggle>(toggles.default);

  const toggleMenu = () => {
    setToggle((prevToggle) =>
      prevToggle === toggles.open ? toggles.default : toggles.open
    );
  };

return (
  <ToggleContext.Provider value={{ toggle, toggleMenu }}>
    {children}
  </ToggleContext.Provider>
);
};

const useToggle = (): ToggleContextType => {
  const context = useContext(ToggleContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export { ToggleProvider, useToggle };
