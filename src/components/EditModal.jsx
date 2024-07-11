import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const EditModal = ({ open, handleClose, cardData, handleSave }) => {
  const [data, setData] = useState(cardData);

  useEffect(() => {
    setData(cardData);
  }, [cardData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSaveClick = () => {
    handleSave(data);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="edit-modal-title"
      aria-describedby="edit-modal-description"
    >
      <Box sx={style}>
        <h2 id="edit-modal-title">Editar Informação</h2>
        <TextField
          fullWidth
          margin="normal"
          label="Nome"
          name="title"
          value={data.title}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Área de Atuação"
          name="subheader"
          value={data.subheader}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Nível de Atuação"
          name="description"
          value={data.description}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Endereço"
          name="address"
          value={data.address}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          label="Telefone"
          name="phone"
          value={data.phone}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          Salvar
        </Button>
      </Box>
    </Modal>
  );
};

export default EditModal;
