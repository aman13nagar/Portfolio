import React from 'react';
import { Typography, Container, Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import ProjectCard from './Project';
import mealimg from '../assets/images/intro1.png';
import timeimg from '../assets/images/Screenshot 2024-05-25 114321.png'
import quizimg from '../assets/images/Screenshot 2024-07-02 173718.png'
import Profiles from '../pages/Profiles';

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: 'black',
  color: 'white',
  fontFamily: 'Roboto, sans-serif',
  background: theme.palette.mode === 'dark' ? 'black' : 'white',
}));

const projects = [
  {
    title: 'Time Management for a Company',
    description: 'This comprehensive tool is designed to help you and your team manage time efficiently, and enhance productivity. With features such as time logging, real-time messaging, task management, our software is your ultimate solution for effective time management.',
    image: timeimg||'https://via.placeholder.com/300', 
    link: 'https://github.com/aman13nagar/TMS-for-a-Company',
    link1:'https://time-management-system-for-a-company.onrender.com/',
  },
  {
    title: 'Meal Planner',
    description: 'MealPlanner is an intuitive and user-friendly web application designed to help users plan their meals and manage their nutritional intake efficiently. It allows users to create meal plans, track nutritional values, and maintain a balanced diet with ease.',
    image: mealimg||'https://via.placeholder.com/300',
    link:'https://github.com/aman13nagar/Meal-Planner',
    link1: 'https://meal-planner-5vyej5kpc-aman-nagars-projects-9c73bca7.vercel.app/intro',
  },
  {
    title: 'Online Quiz Maker',
    description: 'This application is designed to simplify the process of creating, managing, and conducting quizzes. It is a versatile tool perfect for educators, trainers, and anyone who needs to create quizzes quickly and efficiently.',
    image: quizimg||'https://via.placeholder.com/300',
    link: 'https://github.com/aman13nagar/Quiz-Maker',
    link1:'https://online-quiz-maker-swart.vercel.app/',
  },
];

const Projects = () => {
  return (
    <StyledContainer>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        My Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box display="flex" height="100%">
              <ProjectCard 
                title={project.title}
                description={project.description}
                image={project.image}
                link={project.link}
                link1={project.link1}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography mt={16} variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        My Profiles
      </Typography>
      <Profiles/>
    </StyledContainer>
  );
};

export default Projects;


