import React from 'react';
import { Container, Box } from '@mui/material';
import AboutMe from '../components/About';
import Projects from '../components/Projects';
import Skills from '../components/Skills';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <Container>
        <Box my={4}>
          <AboutMe />
        </Box>
        <Box my={4}>
          <Projects />
        </Box>
        <Box my={4}>
          <Skills />
        </Box>
        <Box my={4}>
          <Contact />
        </Box>
      </Container>
    </>
  );
};

export default Home;


