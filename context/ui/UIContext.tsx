import { createContext } from 'react';

export interface ContextProps {
  sideMenuOpen: boolean;
  showModal: boolean;
  isDragging: boolean;
  handleSideOpenMenu: () => void;
  handleSideCloseMenu: () => void;
  handleOpenModal: () => void;
  handleCloseModal: () => void;
  handleStartDragging: () => void;
  handleCloseDragging: () => void;
};

export const UiContext = createContext({} as ContextProps);