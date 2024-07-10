import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red, blue, pink } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  title = "Default Title", //nome
  subheader = "Default Subheader", // area de atuaçao
  image = "/static/images/cards/paella.jpg", //imagem
  avatarColor = 'blue',
  description = "Default Description", //nivel de atuaçao
  address = "Default Address", //endereço
  otherAreas = "Default Other Areas" // outras areas
}) {
  const [expanded, setExpanded] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const getAvatarColor = () => {
    if (avatarColor === 'blue') {
      return blue[500];
    } else if (avatarColor === 'pink') {
      return pink[500];
    } else {
      return red[500];
    }

  
  };

  const handleEdit = () => {
    handleMenuClose();
    alert(`Editar ${title}`);
  };

  const handleDelete = () => {
    handleMenuClose();
    alert(`Deletar ${title}`);
  };
  

  return (
    <Card style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.8)', maxWidth: '400px' }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: getAvatarColor() }} aria-label="recipe">
          {title ? title.charAt(0) : "R"}
        </Avatar>
        
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleMenuClick}>
              <MoreVertIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleEdit}>Editar</MenuItem>
              <MenuItem onClick={handleDelete}>Deletar</MenuItem>
            </Menu>
          </>
        }
        title={title}
        subheader={subheader}
        style={{ background: '#319fc9' }} />
      <CardMedia
        component="img"
        height="150"
        image={image}
        alt="Dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <strong>Nível de Atuação:</strong> {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Endereço:</strong> {address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <strong>Outras Áreas:</strong> {otherAreas}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ background: '#9bd8ef' }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <AddCircleOutlineIcon />
        </ExpandMore>
      </CardActions>
    </Card>
  );
}
