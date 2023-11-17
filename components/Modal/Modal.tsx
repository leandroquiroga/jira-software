import React, { ChangeEvent, SetStateAction, useContext, useState } from 'react'

import { Box, Button, Modal, TextField } from '@mui/material';
import SaveIcon from "@mui/icons-material/Save";
import CancelIcon from "@mui/icons-material/Cancel";

import { EntriesContext } from '@/context';

interface ModalEntryProps {
  showModal: boolean;
  setShowModal: React.Dispatch<SetStateAction<boolean>>;
}


const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: '600px' ,
  width: '90%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignContent: 'center',
  height: 200 ,
  bgcolor: "background.paper",
  border: "1px solid #202020",
  borderRadius: '10px',
  boxShadow: 24,
  p: 2,
};

export const ModalEntry: React.FC<ModalEntryProps> = ({setShowModal, showModal}) => {
  
  const { saveNewEntry } = useContext(EntriesContext);
  const [inputValue, setInputValue] = useState<string>('');
  const [touched, setTouched] = useState<boolean>(false);
  const handleClose = () => setShowModal(false);
  

  const handleChangedInput = (event: ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value)
  const onSaveTask = () => {
    if (inputValue.length === 0) return;
    console.log({inputValue})

    saveNewEntry(inputValue)
    setShowModal(false);
    setTouched(false);
    setInputValue('')
  }
  
  const handleInputError = inputValue.length <= 0 && touched;
  const showHelperText = handleInputError && "Ingrese un valor";


  return (
    <div>
      <Modal
        open={showModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <TextField
            fullWidth
            placeholder="Ingrese su nueva tarea"
            focused
            multiline
            label="Nueva tarea"
            helperText={showHelperText}
            error={handleInputError}
            value={inputValue}
            onChange={handleChangedInput}
            onBlur={() => setTouched(true)}
          />

          <Box
            sx={{
              justifyContent: "space-between",
              margin: "10px auto",
            }}>
            <Button
              variant="outlined"
              sx={{ margin: "0 30px" }}
              endIcon={<CancelIcon />}
              onClick={() => setShowModal(false)}>
              Cancelar
            </Button>
            <Button
              variant="outlined"
              sx={{ margin: "0 30px" }}
              endIcon={<SaveIcon />}
              disabled={inputValue.length <= 0}
              onClick={() => onSaveTask()}>
              Guardar
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};