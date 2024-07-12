import React, { useEffect, useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import { getLevelsofexpertise, getSpecialties } from '../services/authService';

const CadastroButton = ({ onSave }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState(null);
  const [area, setArea] = useState('');
  const [level, setLevel] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

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

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const cardData = {
      name,
      image,
      area,
      level,
      address,
      phone,
    };
    onSave(cardData);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ background: "#9bd8ef", borderWidth: "1px", borderColor: "white", borderRadius: "5px", margin: '5px', color: "#009", boxShadow: '0px 4px 8px rgba(9, 9, 9, 0.4)', height: "100%", fontWeight: "bold" }}>
        Cadastrar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ background: 'linear-gradient(to right, #319fc9, #9bd8ef,#319fc9)', fontWeight: "bold" }}>Cadastrar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="file"
            margin="dense"
            accept="image/*"
            fullWidth
            onChange={(e) => setImage(e.target.files[0])}
          />
          <InputLabel id="select-area-label">Área de Atuação</InputLabel>
          <Select
            labelId="select-area-label"
            id="select-area"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            label="Área de Atuação"
            fullWidth
          >
            {specialties.map((level) => (
              <MenuItem key={level.id} value={level.id}>{level.name}</MenuItem>
            ))}
          </Select>
          <InputLabel id="select-level-label">Nível de Atuação</InputLabel>
          <Select
            labelId="select-level-label"
            id="select-level"
            value={level}
            onChange={(e) => setLevel(e.target.value)}
            label="Nível de Atuação"
            fullWidth
          >
            {levelsofexpertise.map((level) => (
              <MenuItem key={level.id} value={level.id}>{level.name}</MenuItem>
            ))}
          </Select>
          <TextField
            margin="dense"
            label="Endereço do Local de Trabalho"
            fullWidth
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Telefone"
            fullWidth
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ background: 'linear-gradient(to right, #319fc9, #9bd8ef,#319fc9)' }}>
          <Button onClick={handleClose} style={{ color: "black", fontWeight: "bold" }}>Cancelar</Button>
          <Button onClick={handleSave} style={{ color: "black", fontWeight: "bold" }}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CadastroButton;
