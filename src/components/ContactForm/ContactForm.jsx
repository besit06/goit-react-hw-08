import { useState } from 'react';
import s from './ContactForm.module.css';

export const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact({ name, number });
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={s.input}
          required
        />
      </label>
      <label className={s.label}>
        Number:
        <input
          type="tel"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className={s.input}
          required
        />
      </label>
      <button type="submit" className={s.button}>Add Contact</button>
    </form>
  );
};