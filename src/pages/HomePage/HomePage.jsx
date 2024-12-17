import { Container, Typography, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <Container>
      <Box sx={{ textAlign: 'center', marginTop: 8 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to PhoneBook
        </Typography>
        <Typography variant="h6" paragraph>
          Manage your contacts easily and securely.
        </Typography>
        <Button variant="contained" color="primary" component={NavLink} to="/register">
          Get Started
        </Button>
      </Box>
    </Container>
  );
};