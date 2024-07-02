import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';
import errorImage from '../assets/images/404-page-not-found.svg'; // Ensure you have an image in your assets folder

const Background = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100vh',
  backgroundImage: `url(${errorImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  textAlign: 'center',
  color: theme.palette.common.white,
}));

const Overlay = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  padding: theme.spacing(6),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const NotFound = () => {
  return (
    <Background>
      <Overlay>
        <Typography variant="h1" component="h1" gutterBottom>
          404
        </Typography>
        <Typography variant="h4" component="h2" gutterBottom>
          Oops! Page Not Found
        </Typography>
        <Typography variant="body1" component="p" gutterBottom>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </Typography>
        <Button variant="contained" color="primary" component={Link} to="/" size="large">
          Go to Home
        </Button>
      </Overlay>
    </Background>
  );
};

export default NotFound;

