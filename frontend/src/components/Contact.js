import React, { useState } from 'react';
import { Typography, Container, TextField, Button, Box, Paper, CircularProgress } from '@mui/material';
import { styled } from '@mui/system';
import api from '../utils/api';
import { motion } from 'framer-motion';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: '100px',
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  maxWidth: '600px',
}));

const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(3),
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    '&:hover fieldset': {
      borderColor: theme.palette.primary.main,
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  padding: theme.spacing(1.5),
}));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    api.post('/send', formData)
      .then((response) => {
        console.log('Message sent:', response.data);
        setSubmitted(true);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error sending the message:', error);
        setLoading(false);
      });
  };

  return (
    <StyledContainer component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <Paper elevation={3} sx={{ padding: 4 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Contact Me
        </Typography>
        {submitted ? (
          <Typography variant="h6" color="success.main">
            Thank you for your message!
          </Typography>
        ) : (
          <StyledForm noValidate autoComplete="off" onSubmit={handleSubmit}>
            <StyledTextField
              id="name"
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={handleChange}
              required
            />
            <StyledTextField
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={handleChange}
              required
            />
            <StyledTextField
              id="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              fullWidth
              value={formData.message}
              onChange={handleChange}
              required
            />
            <Box textAlign="center">
              <StyledButton variant="contained" color="primary" type="submit" disabled={loading}>
                {loading ? <CircularProgress size={24} /> : 'Send'}
              </StyledButton>
            </Box>
          </StyledForm>
        )}
      </Paper>
    </StyledContainer>
  );
};

export default Contact;

