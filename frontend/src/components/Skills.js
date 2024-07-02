import React, { useState } from 'react';
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Tooltip,
  TextField,
  LinearProgress,
  Box,
} from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import CodeIcon from '@mui/icons-material/Code';
import WebIcon from '@mui/icons-material/Web';
import StorageIcon from '@mui/icons-material/Storage';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

const skills = [
  { name: 'Node.js', icon: <CodeIcon fontSize="large" />, level: 95 },
  { name: 'Express.js', icon: <CodeIcon fontSize="large" />, level: 90 },
  { name: 'Socket.IO', icon: <CodeIcon fontSize="large" />, level: 60 },
  { name: 'React.js', icon: <WebIcon fontSize="large" />, level: 85 },
  { name: 'MongoDB', icon: <StorageIcon fontSize="large" />, level: 90 },
  { name: 'C++', icon: <DeveloperModeIcon fontSize="large" />, level: 99 },
  { name: 'JavaScript', icon: <CodeIcon fontSize="large" />, level: 95 },
  { name: 'CSS', icon: <DesignServicesIcon fontSize="large" />, level: 99 },
  { name: 'HTML', icon: <DesignServicesIcon fontSize="large" />, level: 99 },
  { name: 'C', icon: <DeveloperModeIcon fontSize="large" />, level: 90 },
  { name: 'Data Structures and Algorithms', icon: <CodeIcon fontSize="large" />, level: 97 },
  { name: 'Computer Networks', icon: <WebIcon fontSize="large" />, level: 90 },
  { name: 'Operating Systems', icon: <CodeIcon fontSize="large" />, level: 85 },
  { name: 'Bootstrap', icon: <WebIcon fontSize="large" />, level: 85 },
  { name: 'EJS', icon: <CodeIcon fontSize="large" />, level: 90 },
  { name: 'UI/UX Design', icon: <DesignServicesIcon fontSize="large" />, level: 75 },
];

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: theme.palette.mode === 'dark' ? 'black' : 'white',
}));

const SkillCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(3),
  boxShadow: theme.shadows[5],
  height:'100%',
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.01)',
  },
}));

const Skills = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = skills.filter(skill =>
    skill.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <StyledContainer>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        Skills
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search skills..."
        onChange={(e) => setSearchQuery(e.target.value)}
        sx={{ mb: 4, width: '100%', maxWidth: 400 }}
      />
      <Grid container spacing={3}>
        {filteredSkills.map((skill) => (
          <Grid item xs={12} sm={6} md={4} key={skill.name}>
            <motion.div whileHover={{ scale: 1.1 }}>
              <Tooltip title={skill.name} arrow>
                <SkillCard>
                  <CardContent sx={{ textAlign: 'center' }}>
                    {skill.icon}
                    <Typography variant="h6" component="h6" mt={2}>
                      {skill.name}
                    </Typography>
                    <Box sx={{ width: '100%', mt: 2 }}>
                      <LinearProgress variant="determinate" value={skill.level} />
                    </Box>
                  </CardContent>
                </SkillCard>
              </Tooltip>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
};

export default Skills;


