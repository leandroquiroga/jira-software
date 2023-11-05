import React from 'react'
import IconButton, { IconButtonProps, IconButtonOwnProps, IconButtonClasses} from '@mui/material/IconButton';
import { styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { purple } from '@mui/material/colors';

const ButtonStyle = styled(IconButton)({
  boxShadow: "none",
  textTransform: "none",
  background: "rgba(130,123,255,.9)",
  position: "fixed",
  bottom: "20px",
  right: "10px",
  display: "flex",
  justifyContent: "center",
  alignContent: "center",
  "&:hover": {
    backgroundColor: "#0069d9",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
});

export const ButtonModal = () => {
  return (
    <ButtonStyle aria-label='add' size='medium'>
      <AddIcon fontSize="inherit" />
    </ButtonStyle>
  );
}