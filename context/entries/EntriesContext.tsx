import { Entry } from '@/interfaces';
import { createContext } from 'react';

export interface EntiesContextProps {
  entries: Entry[];
};

export const EntriesContext = createContext({} as EntiesContextProps);