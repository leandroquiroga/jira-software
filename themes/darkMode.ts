import { createTheme } from "@mui/material";

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#202020",
    },
    primary: {
      main: "#52A5E0",
    },
    text: {
      primary: "#EFF3F5",
      secondary: "#C8CDD0",
    },
    contrastThreshold: 0.9,
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
      main: "#71f9ff",
    },
  },

  components: {
    MuiSwitch: {
      defaultProps: {},
      styleOverrides: {
        colorPrimary: "#FFF",
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
