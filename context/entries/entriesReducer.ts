import { EntryState } from '@/interfaces';
import { EntriesActionType } from '@/types';


export const entriesReducer = (
  state: EntryState,
  action: EntriesActionType
): EntryState => {
  switch (action.type) {
    case '[Entry] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      };
    
    case '[Entry] Updated-Entry':
      return {
        ...state, 
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status;
            entry.description = action.payload.description;
            entry.createdAt = action.payload.createdAt
          };

          return entry
        })
      }
    
    
    case '[Entry] Initial-Load': 
      return {
        ...state, 
        entries: [...action.payload]
      }

    default:
      return state;
  }
};