import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Select, MenuItem, InputLabel } from '@mui/material';

const CadastroButton = ({ onSave }) => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [area, setArea] = useState('');
  const [level, setLevel] = useState('');
  const [address, setAddress] = useState('');
  const [otherAreas, setOtherAreas] = useState('');

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
      otherAreas,
    };
    onSave(cardData);
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen} style={{ background: "#9bd8ef", borderWidth: "1px", borderColor: "white", borderRadius: "5px", margin: '5px', color: "#009", boxShadow: '0px 4px 8px rgba(9, 9, 9, 0.4)', height:"100%",fontWeight:"bold"}}>
        Cadastrar
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle style={{ background: 'linear-gradient(to right, #319fc9, #9bd8ef,#319fc9)', fontWeight:"bold"}}>Cadastrar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Nome"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            label="Imagem URL"
            fullWidth
            value={image}
            onChange={(e) => setImage(e.target.value)}
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
            <MenuItem value="Cardiologia">Cardiologia</MenuItem>
            <MenuItem value="Radiologia">Radiologia</MenuItem>
            <MenuItem value="Dentista">Dentista</MenuItem>
            <MenuItem value="Pediatria">Pediatria</MenuItem>
            <MenuItem value="Oftalmologia">Oftalmologia</MenuItem>
            <MenuItem value="Psiquiatria">Psiquiatria</MenuItem>
            <MenuItem value="Ginecologia e Obstetrícia">Ginecologia e Obstetrícia</MenuItem>
            <MenuItem value="Ortopedia">Ortopedia</MenuItem>
            <MenuItem value="Neurologia">Neurologia</MenuItem>
            <MenuItem value="Urologia">Urologia</MenuItem>
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
            <MenuItem value="Tecnólogo">Tecnólogo</MenuItem>
            <MenuItem value="Assistente">Assistente</MenuItem>
            <MenuItem value="Estagiário">Estagiário</MenuItem>
            <MenuItem value="Especialista">Especialista</MenuItem>
            <MenuItem value="Trainee">Trainee</MenuItem>
            <MenuItem value="Consultor">Consultor</MenuItem>
            <MenuItem value="Coordenador">Coordenador</MenuItem>
            <MenuItem value="Pesquisador">Pesquisador</MenuItem>
            <MenuItem value="Professor">Professor</MenuItem>
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
            label="Outras Áreas de Atuação"
            fullWidth
            value={otherAreas}
            onChange={(e) => setOtherAreas(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{ background: 'linear-gradient(to right, #319fc9, #9bd8ef,#319fc9)'}}>
          <Button onClick={handleClose} style={{ color:"black", fontWeight:"bold"}}>Cancelar</Button>
          <Button onClick={handleSave} style={{ color:"black", fontWeight:"bold"}}>Salvar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default CadastroButton;
