export interface UIState {
  sideMenuOpen: boolean;
  showModal: boolean;
}

export interface UIProviderProps {
  children: JSX.Element | JSX.Element[];
}

export interface LayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}


export interface ListItemProps {
  children: JSX.Element | JSX.Element[];
  title: string;
};

export interface EntriesProviderProps {
  entries?: [];
  children: JSX.Element | JSX.Element[];
}
export interface EntryState {
  entries: Entry[];
}

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatus;
}

export type EntryStatus = 'pending' | 'in-progress' | 'finished'