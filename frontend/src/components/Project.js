import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: '#1c1c1c',
  color: 'white',
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  height: '100%', 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const ProjectImage = styled(CardMedia)({
  height: 140,
});

const ProjectCard = ({ title, description, image, link, link1 }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
      <StyledCard>
        <ProjectImage image={image} title={title} />
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" component="p" paragraph>
            {description}
          </Typography>
          <Box textAlign="center" mt={2}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              component="a"
              href={link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub
            </Button>
            <Button
              variant="contained"
              color="secondary"
              startIcon={<LaunchIcon />}
              component="a"
              href={link1}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ml: 2 }}
            >
              Visit Site
            </Button>
          </Box>
        </CardContent>
      </StyledCard>
    </motion.div>
  );
};

export default ProjectCard;






