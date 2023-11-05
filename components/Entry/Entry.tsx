import React from 'react'
import { Box, Button } from '@mui/material'
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

export const Entry = () => {
  return (
    <>
      <Box display="flex" justifyContent="space-evenly">
        <Button
          startIcon={<CancelIcon />}
          size="small"
          variant="outlined"
          color="secondary">
          Cancelar
        </Button>
        <Button
          startIcon={<SaveIcon />}
          size="small"
          variant="outlined"
          color="primary">
          Guardar
        </Button>
      </Box>
    </>
  );
}
