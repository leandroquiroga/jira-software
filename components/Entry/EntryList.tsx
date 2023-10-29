import React from 'react'
import { List, Paper, Typography, useTheme } from "@mui/material";

export const EntryList = () => {
  const theme = useTheme();

  return (
    <div>
      <Paper
        sx={{
          height: "calc(100vh - 250px)",
          backgroundColor: "transparent",
          overflow: "auto",
          "&::-webkit-scrollbar": {
            width: "10px",
          },
          "&::-webkit-scrollbar-track": {
            background: `${theme.palette.background.default}`,
          },
          "&::-webkit-scrollbar-thumb": {
            background: `${
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }`,
            border: `5px none ${
              theme.palette.mode === "dark"
                ? theme.palette.primary.dark
                : theme.palette.primary.light
            }`,
            borderRadius: "4px",
          },
        }}>
        {/* Todo va a cambiar dependiendo si estamos haciendo un drag and drop */}
        <List sx={{ opacity: 1 }}>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
          <Typography variant="h4">Hola Mundo</Typography>
        </List>
      </Paper>
    </div>
  );
}
