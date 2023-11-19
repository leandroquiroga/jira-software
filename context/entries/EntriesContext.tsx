import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface EntiesContextProps {
  entries: Entry[];
  saveNewEntry: (description: string) => void;
  updateEntry: (entry: Entry) => void;
};

export const EntriesContext = createContext({} as EntiesContextProps);