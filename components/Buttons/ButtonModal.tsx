import React, { useState } from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ModalEntry } from '..';

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
    backgroundColor: "rgba(130,110,255,.9)",
    borderColor: "rgba(130,110,255,.9)",
    boxShadow: "none",
  },
});

export const ButtonModal = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const handleOpenModal = () => {
    setShowModal(!showModal);
  }
  
  return (
    <>
      <ButtonStyle aria-label='add' size='medium' onClick={handleOpenModal}>
        <AddIcon fontSize="inherit" />
      </ButtonStyle>

      {
        (showModal) && <ModalEntry showModal={showModal} setShowModal={setShowModal} />
      }
    
    </>
  );
}