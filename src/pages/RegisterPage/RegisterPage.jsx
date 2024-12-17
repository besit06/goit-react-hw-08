import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Container, Typography, Box } from '@mui/material';

export const RegisterPage = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" component="h1">
          Create an Account
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Join us to start managing your contacts!
        </Typography>
      </Box>
      <RegisterForm />
    </Container>
  );
};