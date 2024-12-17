import { useSelector } from 'react-redux';
import { AppBar as MuiAppBar, Toolbar, Typography, Box } from '@mui/material';
import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <MuiAppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Phonebook
        </Typography>
        <Box sx={{ display: 'flex', gap: '20px' }}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </Box>
      </Toolbar>
    </MuiAppBar>
  );
};