import { createTheme } from "@mui/material";

export const ligthTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#FBFBFE",
    },
    primary: {
      main: "#2f2bad",
    },
    text: {
      primary: "#202020",
      secondary: "#697477",
    },
    contrastThreshold: 2,
    warning: {
      main: "#edd269",
    },
    error: {
      main: "#ff4746",
    },
    success: {
      main: "#8fbe00",
    },
    secondary: {
      main: "#9a26a2",
    },
  },

  components: {
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: {
        colorPrimary: "#202020",
      },
    },
    MuiIconButton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          color: "#FFF",
        },
      },
    },
  },
});