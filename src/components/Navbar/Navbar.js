import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { NavLink } from 'react-router-dom';

function Navbar({ loggedIn }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Chat
          </Typography>
          {
            loggedIn ?
              <Button color="inherit">Logout</Button>
              :
              <NavLink to='/signin'>
                <Button color="inherit">Login</Button>
              </NavLink>
          }
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;