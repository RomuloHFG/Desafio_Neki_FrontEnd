import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, Button, Select, MenuItem } from '@mui/material';
import { getLevelsofexpertise, getSpecialties } from '../services/authService';

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

  const [levelsofexpertise, setLevelsofexpertise] = useState([]);
  const [specialties, setSpecialties] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setSpecialties(await getSpecialties());
        setLevelsofexpertise(await getLevelsofexpertise());
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    setData(cardData);
    console.log(cardData);
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
        <Select
            labelId="select-area-label"
            id="select-area"
            value={data.subheader}
            name="subheader"
            onChange={handleChange}
            label="Área de Atuação"
            fullWidth
          >
            {specialties.map((level) => (
              <MenuItem key={level.id} value={level.id}>{level.name}</MenuItem>
            ))}
          </Select>
        <Select
            labelId="select-level-label"
            id="select-level"
            value={data.description}
            name="description"
            onChange={handleChange}
            label="Nível de Atuação"
            fullWidth
          >
            {levelsofexpertise.map((level) => (
              <MenuItem key={level.id} value={level.id}>{level.name}</MenuItem>
            ))}
          </Select>
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