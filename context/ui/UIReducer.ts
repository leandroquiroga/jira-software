import { UIState } from '@/interfaces';
import { UIActionType } from '@/types';


export const uiReducer = (state: UIState, action: UIActionType): UIState => {

  switch (action.type) {
    case "[UI] - Open Sidebar":
      return {
        ...state,
        sideMenuOpen: true,
      };
    case "[UI] - Close Sidebar":
      return {
        ...state,
        sideMenuOpen: false,
      };
    
    case '[UI] - Open Modal': 
      return {
        ...state,
        showModal: true
      }

    case '[UI] - Close Modal':
      return {
        ...state,
        showModal: false
      }
    default:
      return state;
  };

};