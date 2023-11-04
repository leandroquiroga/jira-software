import React, { useReducer } from 'react'
import { v4 as uuidV4 } from 'uuid'

import { EntriesContext, entriesReducer } from '../index';
import { EntryState, EntriesProviderProps } from '@/interfaces';

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
  const [state, dispath] = useReducer(entriesReducer, ENTRIES_INITAL_STATE);

  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}>
      {children}
    </EntriesContext.Provider>
  );
};