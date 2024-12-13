import { Formik, Form, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../redux/auth/operations';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
    try {
      
      await dispatch(login(values)).unwrap();
     
      navigate('/contacts');
    } catch (error) {
      console.error('Login error:', error);
   
      setFieldError('email', 'Invalid email or password');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <label htmlFor="email">Email</label>
          <Field id="email" name="email" type="email" placeholder="Your email" />
          {errors.email && touched.email && <div>{errors.email}</div>}

          <label htmlFor="password">Password</label>
          <Field id="password" name="password" type="password" placeholder="Your password" />
          {errors.password && touched.password && <div>{errors.password}</div>}

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </button>
        </Form>
      )}
    </Formik>
  );
};