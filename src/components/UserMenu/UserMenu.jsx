import { useDispatch, useSelector } from 'react-redux';
import { Button, Typography } from '@mui/material';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <>
      <Typography variant="body1">Welcome, {user.name}!</Typography>
      <Button
        color="inherit"
        onClick={() => dispatch(logOut())}
        variant="outlined"
      >
        Logout
      </Button>
    </>
  );
};
