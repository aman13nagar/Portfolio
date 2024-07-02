import React, { useContext, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, InputBase, Box, List, ListItem, ListItemText, Paper, Drawer, ListItemIcon } from '@mui/material';
import { styled, alpha } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeContext } from '../contexts/ThemeContext';
import useMediaQuery from '@mui/material/useMediaQuery';

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
}));

const Appbar = styled(AppBar)(({ theme }) => ({
  top: 0,
  left: 0,
  flexWrap: 'wrap',
  position: 'fixed',
  zIndex: 1000,
  backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#6060ff',
  opacity: 0.8,
}));

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Navbar = () => {
  const { toggleTheme, mode } = useContext(ThemeContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  const portfolioItems = ['', 'Projects', 'Skills', 'Contact'];

  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const results = portfolioItems.filter((item) =>
        item.toLowerCase().includes(query)
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {portfolioItems.map((item, index) => (
          <ListItem button key={index} component="a" href={`/${item.toLowerCase().replace(' ', '')}`}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Appbar>
      <Toolbar>
        <Title variant="h6">Portfolio</Title>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchResults.length > 0 && (
            <Paper elevation={3} style={{ position: 'absolute', top: '40px', left: 0, right: 0 }}>
              <List>
                {searchResults.map((result, index) => (
                  <ListItem button key={index} component="a" href={`/${result.toLowerCase().replace(' ', '')}`}>
                    <ListItemText primary={result} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Search>
        <IconButton sx={{ ml: 1 }} onClick={toggleTheme} color="inherit">
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              {drawer}
            </Drawer>
          </>
        ) : (
          <>
            <Button href="/" color="inherit">About Me</Button>
            <Button href="/projects" color="inherit">Projects</Button>
            <Button href="/skills" color="inherit">Skills</Button>
            <Button href="/contact" color="inherit">Contact</Button>
          </>
        )}
      </Toolbar>
    </Appbar>
  );
};

export default Navbar;




