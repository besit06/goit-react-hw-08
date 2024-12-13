import { Formik, Form, Field } from 'formik';

export const ContactForm = ({ onAddContact }) => {
  const handleSubmit = (values, { resetForm }) => {
    onAddContact(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field id="name" name="name" placeholder="Enter name" />

          <label htmlFor="phone">Phone</label>
          <Field id="phone" name="phone" placeholder="Enter phone number" />

          <button type="submit">Add Contact</button>
        </Form>
      )}
    </Formik>
  );
};