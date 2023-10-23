import { createContext, useMemo, useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';

import { darkTheme, ligthTheme } from '@/themes';

// Crea un contexto para el toogle del theme 
export const ColorThemeContext = createContext({ toggleThemeMode: () => {} });

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<PaletteMode>('dark');

  const selectTheme = useMemo(() => ({
    toggleThemeMode: () => {
      setTheme((prev: PaletteMode) => prev === 'light' ? 'dark' : 'light')
    }
  }), []); 

  return (
    <ColorThemeContext.Provider value={selectTheme}>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : ligthTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorThemeContext.Provider>
  );
}
