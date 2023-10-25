import React, { useReducer } from 'react'
import { UiContext, uiReducer } from '..';
import { UIState, UIProviderProps } from '@/interfaces';

const UI_INITAL_STATE: UIState = {
  sideMenuOpen: false
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  const handleSideOpenMenu = () => {
    dispatch({type: 'UI - Open Sidebar'});
  }

  const handleSideCloseMenu = () => {
    dispatch({type: 'UI - Close Sidebar'})
  }
  return (
    <UiContext.Provider
      value={{
        ...state,
        handleSideOpenMenu,
        handleSideCloseMenu,
      }}>
      {children}
    </UiContext.Provider>
  );
};