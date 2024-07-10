import React, { useState, useEffect } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Select, MenuItem, TextField } from '@mui/material';

const SkillModal = ({ open, onClose, onSave }) => {
  const [availableSkills, setAvailableSkills] = useState([]);
  const [newSkill, setNewSkill] = useState({ name: '', level: '', description: '', image: '' });

  useEffect(() => {
    // simulando uma api
    const simulatedFetchAvailableSkills = async () => {
      const simulatedAvailableSkills = [
        { id: 1, name: 'React' },
        { id: 2, name: 'Node.js' },
        { id: 3, name: 'GraphQL' }
      ];
      setAvailableSkills(simulatedAvailableSkills);
    };
    simulatedFetchAvailableSkills();
  }, []);

  const handleSave = () => {
    onSave(newSkill);
    setNewSkill({ name: '', level: '', description: '', image: '' });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Adicionar Skill</DialogTitle>
      <DialogContent>
        <Select
          value={newSkill.name}
          onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          fullWidth
        >
          {availableSkills.map((skill) => (
            <MenuItem key={skill.id} value={skill.name}>
              {skill.name}
            </MenuItem>
          ))}
        </Select>
        <TextField
          label="Level"
          value={newSkill.level}
          onChange={(e) => setNewSkill({ ...newSkill, level: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Descrição"
          value={newSkill.description}
          onChange={(e) => setNewSkill({ ...newSkill, description: e.target.value })}
          fullWidth
          margin="normal"
        />
        <TextField
          label="URL da Imagem"
          value={newSkill.image}
          onChange={(e) => setNewSkill({ ...newSkill, image: e.target.value })}
          fullWidth
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancelar
        </Button>
        <Button onClick={handleSave} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SkillModal;
