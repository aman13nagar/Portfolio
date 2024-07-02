import React from 'react';
import { Box, Container, Typography, Link, IconButton, Grid } from '@mui/material';
import { styled } from '@mui/system';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(6, 0),
  boxShadow: theme.shadows[4],
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item>
            <IconButton
              aria-label="GitHub"
              component="a"
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <GitHubIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="Twitter"
              component="a"
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <TwitterIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="textSecondary" align="center" mt={3}>
          &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Built with <Link href="https://mui.com/" target="_blank" rel="noopener noreferrer" color="inherit">Material UI</Link>
        </Typography>
      </Container>
    </FooterContainer>
  );
};

export default Footer;


