import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import cardiologistaImg from '../assets/img/cardiologista.jpg';
import dentistaImg from '../assets/img/dentista.jpg';
import plasticaImg from '../assets/img/plástica.jpg';
import radiologistaImg from '../assets/img/radiologista.png';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  { imgPath: cardiologistaImg },
  { imgPath: dentistaImg },
  { imgPath: plasticaImg },
  { imgPath: radiologistaImg },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '98%',
      margin: '0 auto',
      border: '1px solid grey',
      borderRadius: '5px',
      boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)',
    }}>

      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        sx={{
          width: '100%',
        }}
      >
        {images.map((step, index) => (
          <div key={index}>
            <Box
              component="img"
              sx={{
                height: 400,
                display: 'block',
                maxWidth: '100%',
                width: '100%',
                objectFit: 'cover',
                visibility: Math.abs(activeStep - index) <= 2 ? 'visible' : 'hidden',
              }}
              src={step.imgPath}
              alt={`Step ${index}`}
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default SwipeableTextMobileStepper;
