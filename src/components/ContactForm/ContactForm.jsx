import { useState } from 'react';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate input
    if (!name || !number) {
      alert('Both fields are required!');
      return;
    }

    // Pass the contact object to the handler
    onAddContact({ name, number });

    // Clear the form
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter number"
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};