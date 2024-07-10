
import React, { useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import RecipeReviewCard from './Card';
import Carousel from './Carousel';
import CadastroButton from './RegistrationButton';
import SearchBar from './Search'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ResponsiveGrid() {
  const [cards, setCards] = useState([]);
  const [searchText, setSearchText] = useState('');

  const handleSaveCard = (cardData) => {
    setCards([...cards, cardData]);
  };

  const filteredCards = cards.filter((card) =>
    card.name.toLowerCase().includes(searchText.toLowerCase())
  );

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
              subheader={card.area}
              image={card.image}
              description={card.level}
              address={card.address}
              otherAreas={card.otherAreas}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
