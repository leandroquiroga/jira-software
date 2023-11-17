import React, { useReducer } from 'react'
import { v4 as uuidV4 } from 'uuid'

import { EntriesContext, entriesReducer } from '../index';
import { EntryState, EntriesProviderProps, Entry } from '@/interfaces';

const ENTRIES_INITAL_STATE: EntryState = {
  entries: [
    {
      _id: uuidV4(),
      description: "Tomar un te",
      createdAt: Date.now(),
      status: "pending",
    },
    {
      _id: uuidV4(),
      description: "Estudiar en Udemy",
      createdAt: Date.now() - 1000000,
      status: "in-progress",
    },
    {
      _id: uuidV4(),
      description: "Salir a merendar",
      createdAt: Date.now() - 100000,
      status: "finished",
    },
  ],
};

export const EntriesProvider: React.FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);


  const saveNewEntry = (description: string) => {
    
    const newEntry: Entry = {
        _id: uuidV4(),
        createdAt: Date.now(),
        description,
        status: "pending",
    }

    dispatch({type: '[Entry] Add-Entry', payload: newEntry});
  }

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        saveNewEntry,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};