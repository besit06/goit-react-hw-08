import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Container, Typography } from '@mui/material';

const RegisterSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 5 }}>
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={RegisterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Name"
                  name="name"
                  fullWidth
                  helperText={<ErrorMessage name="name" />}
                  error={!!ErrorMessage.name}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Email"
                  type="email"
                  name="email"
                  fullWidth
                  helperText={<ErrorMessage name="email" />}
                  error={!!ErrorMessage.email}
                />
              </Box>
              <Box mb={2}>
                <Field
                  as={TextField}
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  helperText={<ErrorMessage name="password" />}
                  error={!!ErrorMessage.password}
                />
              </Box>
              <Button type="submit" variant="contained" color="primary" fullWidth disabled={isSubmitting}>
                Register
              </Button>
            </Form>
          )}
        </Formik>
      </Box>
    </Container>
  );
};