import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Container, Typography, Box } from '@mui/material';

export const LoginPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Welcome Back!
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Please enter your login details below.
        </Typography>
      </Box>
      <LoginForm />
    </Container>
  );
};