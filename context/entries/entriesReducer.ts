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

    default:
      return state;
  }
};