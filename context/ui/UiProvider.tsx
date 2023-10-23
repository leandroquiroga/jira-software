import React, { useReducer } from 'react'
import { UiContext, uiReducer } from '..';
import { UIState, UIProviderProps } from '@/interfaces';

const UI_INITAL_STATE: UIState = {
  sideMenuOpen: false
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispath] = useReducer(uiReducer, UI_INITAL_STATE);

  return (
    <UiContext.Provider
      value={{
        sibaMenubar: false,
      }}>
      {children}
    </UiContext.Provider>
  );
};