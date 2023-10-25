import { createContext } from 'react';

export interface ContextProps {
  sideMenuOpen: boolean;
  handleSideOpenMenu: () => void;
  handleSideCloseMenu: () => void;
};

export const UiContext = createContext({} as ContextProps);