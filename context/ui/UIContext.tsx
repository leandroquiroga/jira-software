import { createContext } from 'react';

export interface ContextProps {
  sideMenuOpen: boolean;
  showModal: boolean;
  handleSideOpenMenu: () => void;
  handleSideCloseMenu: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
};

export const UiContext = createContext({} as ContextProps);