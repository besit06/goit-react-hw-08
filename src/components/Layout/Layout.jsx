import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { AppBar } from '../AppBar/AppBar';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container sx={{ mt: 4 }}>
        <Outlet />
      </Container>
    </>
  );
};