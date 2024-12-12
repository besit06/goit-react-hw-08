import { Formik, Form, Field } from 'formik';

export const LoginForm = () => {
  const handleSubmit = (values) => {
    console.log('Login Data:', values);
    // Dispatch login action
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="Your email" />

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="Your password" />

          <button type="submit">Login</button>
        </Form>
      )}
    </Formik>
  );
};