export interface UIState {
  sideMenuOpen: boolean;
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
  title: string
};