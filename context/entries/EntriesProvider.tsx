import React, { useEffect, useReducer } from 'react'

import { EntriesContext, entriesReducer } from '../index';
import { EntryState, EntriesProviderProps, Entry } from '@/interfaces';
import { entriesApi } from '@/apis';

const ENTRIES_INITAL_STATE: EntryState = {
  entries: [],
};

export const EntriesProvider: React.FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);


  const saveNewEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>("/entries", { description });
    dispatch({ type: "[Entry] Add-Entry", payload: data });
  };

  const updateEntry = (entry: Entry) => dispatch({ type: '[Entry] Updated-Entry', payload: entry });

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries');
    dispatch({type: '[Entry] Initial-Load', payload: data})
  };

  useEffect(() => {
    refreshEntries()
  }, [])

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        saveNewEntry,
        updateEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};