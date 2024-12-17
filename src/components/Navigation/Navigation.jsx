import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';

export const Navigation = () => {
  return (
    <>
      <Button component={NavLink} to="/" color="inherit">
        Home
      </Button>
      <Button component={NavLink} to="/contacts" color="inherit">
        Contacts
      </Button>
    </>
  );
};

