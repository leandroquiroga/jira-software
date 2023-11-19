import React, { useReducer } from 'react'
import { UiContext, uiReducer } from '..';
import { UIState, UIProviderProps } from '@/interfaces';

const UI_INITAL_STATE: UIState = {
  sideMenuOpen: false,
  showModal: false,
  isDragging: false
};

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITAL_STATE);

  const handleSideOpenMenu = () => {
    dispatch({type: '[UI] - Open Sidebar'});
  }

  const handleSideCloseMenu = () => {
    dispatch({type: '[UI] - Close Sidebar'})
  }

  const handleOpenModal = () => {
    dispatch({type: '[UI] - Open Modal'})
  }

  const handleCloseModal = () => {
    dispatch({ type: "[UI] - Close Modal" });
  };

  const handleStartDragging = () => { 
    dispatch({type: '[UI] - Start Dragging'})
  };
  const handleCloseDragging = () => {
    dispatch({type: '[UI] - End Dragging'})
   };

  return (
    <UiContext.Provider
      value={{
        ...state,
        handleSideOpenMenu,
        handleSideCloseMenu,
        handleOpenModal,
        handleCloseModal,
        handleStartDragging,
        handleCloseDragging
      }}>
      {children}
    </UiContext.Provider>
  );
};