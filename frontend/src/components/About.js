import React from 'react';
import { Typography, Container, Grid, Box, Avatar, Card, CardContent, Button, IconButton } from '@mui/material';
import { styled ,keyframes} from '@mui/system';
import { motion } from 'framer-motion';
import profilePic from '../assets/images/profile.jpeg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import WorkIcon from '@mui/icons-material/Work';
import WavingHandIcon from '@mui/icons-material/WavingHand';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import { TypeAnimation } from 'react-type-animation';

const typing = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: transparent; }
`;

const StyledContainer = styled(Container)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  background: theme.palette.mode === 'dark' ? 'black' : 'white',
  color: theme.palette.mode === 'dark' ? 'white' : '#333',
  fontFamily: 'Roboto, sans-serif',
}));

const StyledCard = styled(Card)(({ theme }) => ({
  background:'black',
  backgroundColor: theme.palette.mode === 'dark' ? 'black' : 'white',
  color: theme.palette.mode === 'dark' ? 'white' : 'black',
  marginBottom: theme.spacing(4),
  boxShadow: theme.shadows[5],
  borderRadius: theme.shape.borderRadius,
  overflow: 'hidden',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
  },
}));

const MotionAvatar = styled(Avatar)(({ theme }) => ({
  width: 150,
  height: 150,
  border: `3px solid ${theme.palette.primary.main}`,
}));
const TypingText = styled('div')(({ theme }) => ({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  borderRight: `0.15em solid ${theme.palette.primary.main}`,
  width: '24ch',
  animation: `${typing} 4s steps(24) 1s 1 normal both, ${blinkCaret} 0.75s step-end infinite`,
  display: 'flex',
  alignItems: 'center',
  marginTop: '5px',
}));

const AboutMe = () => {
  return (
    <StyledContainer>
      <Typography variant="h3" component="h1" align="center" gutterBottom sx={{ fontWeight: 'bold', color: '#1976d2' }}>
        About Me
      </Typography>
      <Grid item xs={12} md={8}>
        <StyledCard>
          <CardContent>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} sm={4} display="flex" justifyContent="center">
                <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
                  <MotionAvatar alt="Profile Picture" src={profilePic} />
                </motion.div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}>
                  <WavingHandIcon sx={{ fontWeight: 'bold', color: 'green', marginRight: '10px', marginTop: '5px' }} />
                  <TypingText>Hello, I'm Aman Nagar!</TypingText>
                </Typography>
                <Typography variant="h7" component="h3" gutterBottom>
                  <EmailIcon sx={{ fontWeight: 'bold', color: 'green', marginRight: '10px', marginTop: '5px' }} />
                  Email: aman13nagar@gmail.com
                </Typography>
                <Typography variant="h7" component="h3" gutterBottom>
                  <PhoneInTalkIcon sx={{ fontWeight: 'bold', color: 'green', marginRight: '10px', marginTop: '5px' }} />
                  Phone. No: +91 9588801001
                </Typography>
              </Grid>
            </Grid>
            <Box mt={4}>
              <Card sx={{ marginBottom: 3, backgroundColor: '#1c1c1c', color: 'white', padding: 2 }}>
                <Typography variant="body1" component="p" paragraph>
                  <TypeAnimation
                    sequence={[
                      "I'm a passionate web developer with expertise in a wide range of technologies. I specialize in both front-end and back-end development, creating responsive and dynamic web applications that provide exceptional user experiences. My journey started with a curiosity for coding, and now I excel in languages like JavaScript and C++. I've built scalable web applications using Node.js, Express.js, and MongoDB, and mastered UI/UX design principles to create visually stunning interfaces with CSS, HTML, and Bootstrap.",
                      100,
                    ]}
                    wrapper="p"
                    cursor={true}
                  />
                </Typography>
              </Card>
              <Card sx={{ marginBottom: 3, backgroundColor: '#1c1c1c', color: 'white', padding: 2 }}>
                <Typography variant="body1" component="p" paragraph>
                  <TypeAnimation
                    sequence={[
                      "My skills extend beyond coding; I have a deep understanding of Data Structures and Algorithms, and experience optimizing performance in Computer Networks and Operating Systems. Whether it's crafting efficient algorithms or designing seamless user flows, I thrive on solving complex problems with creativity and precision. Apart from coding, I'm an avid learner, always exploring new technologies and trends. I enjoy collaborating with teams to deliver high-impact projects and mentoring aspiring developers to share my knowledge and passion for coding.",
                      100,
                    ]}
                    wrapper="p"
                    cursor={true}
                  />
                </Typography>
              </Card>
              <Card sx={{ marginBottom: 3, backgroundColor: '#1c1c1c', color: 'white', padding: 2 }}>
                <Typography variant="body1" component="p" paragraph>
                  <TypeAnimation
                    sequence={[
                      "When I'm not coding, you can find me hiking in the mountains, sketching ideas for new projects, or indulging in my love for sci-fi literature. I believe in continuous growth, both personally and professionally, and I'm excited about the future possibilities in web development and beyond. My personal interests include singing, playing cricket, listening to music, developing websites, and traveling. These activities help me relax and stay creative.",
                      100,
                    ]}
                    wrapper="p"
                    cursor={true}
                  />
                </Typography>
              </Card>
            </Box>
            <Box mt={3} textAlign="center">
              <Button
                variant="contained"
                color="primary"
                size="large"
                component="a"
                href="https://drive.google.com/file/d/14Exh6oPM9AlrEo_sjtmQcLvgChulnfs5/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                >
                Download Resume
              </Button>
            </Box>
          </CardContent>
        </StyledCard>
      </Grid>
      
      <Box mt={4} textAlign="center">
        <IconButton
          color="primary"
          aria-label="LinkedIn"
          component="a"
          href="www.linkedin.com/in/aman-nagar-9b687925b"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="GitHub"
          component="a"
          href="https://github.com/aman13nagar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          color="primary"
          aria-label="Portfolio"
          component="a"
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <WorkIcon fontSize="large" />
        </IconButton>
      </Box>
    </StyledContainer>
  );
};

export default AboutMe;





