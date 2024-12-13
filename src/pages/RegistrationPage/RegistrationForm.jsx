import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values)); 
    resetForm(); 
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Your name" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="Your email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="Your password" />

          <button type="submit">Register</button>
        </Form>
      )}
    </Formik>
  );
};