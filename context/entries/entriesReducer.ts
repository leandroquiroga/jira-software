import { EntryState } from '@/interfaces';
import { EntriesActionType } from '@/types';


export const entriesReducer = (
  state: EntryState,
  action: EntriesActionType
): EntryState => {
  switch (action.type) {
    case "Entries - Initial":
      return {
        ...state,
      };

    default:
      return state;
  }
};