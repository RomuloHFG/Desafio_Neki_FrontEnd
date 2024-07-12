
import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RecipeReviewCard from './Card';
import Carousel from './Carousel';
import CadastroButton from './RegistrationButton';
import SearchBar from './Search';
import { getProfessionals, postPhoto, postProfessionals } from '../services/authService';


export default function ResponsiveGrid() {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSaveCard = async (data) => {
    console.log(data);

    try {
      const requestData = {
        "name": data.name,
        "specialty": {
          "id": data.area,
        },
        "levelOfExpertise": {
          "id": data.level,
        },
        "address": data.address,
        "phone": data.phone,
      };

      const response = await postProfessionals(requestData);
      await handleUpload(response.id, data.image)
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar profissional:', error);
    }
  };

  const handleUpload = async (professionalId, imageFile) => {
    const formData = new FormData();
    formData.append('photo', imageFile);

    try {
      const response = await postPhoto(formData, professionalId);
      console.log('Resposta do servidor:', response.data);
    } catch (error) {
      console.error('Erro ao carregar a imagem:', error);
    }
  };

  const filteredCards = cards?.filter((card) =>
    card.name.toLowerCase().includes(searchText.toLowerCase())
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getProfessionals();
        console.log(response);
        setCards(response);
      } catch (error) {
        console.error('Erro ao obter dados:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box
        sx={{
          width: '100%',
          margin: '0 auto',
          mb: 2,
        }}
      >
        <Carousel />
      </Box>

      <div style={{
        background: 'linear-gradient(to right, #319fc9, #9bd8ef)',
        height: '15vh',
        width: '98%',
        borderWidth: "1px",
        borderColor: "white",
        borderRadius: "5px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        textAlign: "center"
      }}>
        <CadastroButton onSave={handleSaveCard} />
        <div><h1>O que você está procurando?</h1></div>
        <SearchBar searchText={searchText} setSearchText={setSearchText} />
      </div>

      <div style={{ paddingTop: 20, color: '#319fc9' }}><h1>↓Profissionais especializados cadastrados↓</h1></div>

      <Grid
        container
        spacing={5}
        sx={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0',
          justifyContent: 'center',
        }}
      >
        {filteredCards.map((card, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={3}
            key={index}
            sx={{ minWidth: '300px' }}
          >
            <RecipeReviewCard
              title={card.name}
              subheader={card.specialty.name}
              image={card.photo}
              description={card.levelOfExpertise.name}
              address={card.address}
              phone={card.phone}
              id={card.id}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
