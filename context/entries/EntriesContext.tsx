import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface EntiesContextProps {
  entries: Entry[];
  saveNewEntry: (description: string) => void;
};

export const EntriesContext = createContext({} as EntiesContextProps);