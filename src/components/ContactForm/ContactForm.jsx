import { Formik, Form, Field } from 'formik';
import { TextField, Button, Box, Typography } from '@mui/material';

export const ContactForm = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Box component={Form} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography variant="h5">Add New Contact</Typography>
          <Field
            as={TextField}
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            error={touched.name && !!errors.name}
            helperText={touched.name && errors.name}
          />
          <Field
            as={TextField}
            name="number"
            label="Phone Number"
            variant="outlined"
            fullWidth
            error={touched.number && !!errors.number}
            helperText={touched.number && errors.number}
          />
          <Button type="submit" variant="contained" color="primary">
            Add Contact
          </Button>
        </Box>
      )}
    </Formik>
  );
};