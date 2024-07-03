import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Avatar, Box, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';
import LeetCodeIcon from '@mui/icons-material/Code'; 
import GeeksforGeeksIcon from '@mui/icons-material/Code'; 
import InterviewBitIcon from '@mui/icons-material/Code'; 
import gfgimg from '../assets/images/gfgpic.png';
import leetcodeimg from '../assets/images/leetcodelogo.jpg';
import interviewbitimg from '../assets/images/interviewbitlogo.png';

const ProfileCard = styled(Card)(({ theme }) => ({
  maxWidth: 345,
  margin: 'auto',
  transition: '0.3s',
  boxShadow: '0 8px 20px -6px rgba(0,0,0,0.2)',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const AvatarWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: -theme.spacing(5),
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(10),
  height: theme.spacing(10),
  boxShadow: theme.shadows[4],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const ProgressWrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(2),
}));

const profiles = [
  {
    name: 'LeetCode',
    username: 'aman13nagar',
    link: 'https://leetcode.com/aman13nagar',
    avatar: leetcodeimg||'https://via.placeholder.com/100', 
    icon: <LeetCodeIcon fontSize="large" />,
    stats: '300+ problems solved',
    progress: 75, 
  },
  {
    name: 'GeeksforGeeks',
    username: 'aman13jhvv',
    link: 'https://auth.geeksforgeeks.org/user/aman13jhvv',
    avatar: gfgimg||'https://via.placeholder.com/100', 
    icon: <GeeksforGeeksIcon fontSize="large" />,
    stats: '650+ problems solved',
    progress: 90, 
  },
  {
    name: 'InterviewBit',
    username: 'aman13nagar_8bf5c46ec95a',
    link: 'https://www.interviewbit.com/profile/aman13nagar_8bf5c46ec95a',
    avatar: interviewbitimg||'https://via.placeholder.com/100', 
    icon: <InterviewBitIcon fontSize="large" />,
    stats: '100+ problems solved',
    progress: 55, 
  },
];

const Profiles = () => {
  return (
    <Grid container spacing={4} justifyContent="center" alignItems="center">
      {profiles.map((profile) => (
        <Grid item xs={12} sm={6} md={4} key={profile.name}>
          <ProfileCard>
            <CardMedia
              component="img"
              alt={profile.name}
              height="140"
              image={profile.avatar} 
              title={profile.name}
            />
            <CardContent>
              <AvatarWrapper>
                <StyledAvatar alt={profile.name} src={profile.avatar} />
              </AvatarWrapper>
              <Box textAlign="center" mt={2}>
                <Typography variant="h5" component="h2">
                  {profile.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {profile.stats}
                </Typography>
                <ProgressWrapper>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Progress: {profile.progress}%
                  </Typography>
                  <LinearProgress variant="determinate" value={profile.progress} />
                </ProgressWrapper>
                <StyledButton
                  variant="contained"
                  color="primary"
                  href={profile.link}
                  target="_blank"
                  startIcon={profile.icon}
                >
                  Visit Profile
                </StyledButton>
              </Box>
            </CardContent>
          </ProfileCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Profiles;
