import { createContext } from 'react';

export interface ContextProps {
  sibaMenubar: boolean;
};

export const UiContext = createContext({} as ContextProps);