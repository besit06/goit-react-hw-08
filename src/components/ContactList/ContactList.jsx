import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors'; // Убедитесь, что селектор возвращает уже отфильтрованные контакты
import { useState } from 'react';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts); // Получаем актуальные контакты из Redux
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: '', number: '' });

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  const handleEdit = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    setEditId(id);
    setEditData({ name: contact.name, number: contact.number });
  };

  const handleSave = () => {
    dispatch(updateContact({ id: editId, data: editData }));
    setEditId(null);
    setEditData({ name: '', number: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ul>
      {contacts.map((contact) => (
        <li key={contact.id}>
          {editId === contact.id ? (
            <>
              <input
                type="text"
                name="name"
                value={editData.name}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="number"
                value={editData.number}
                onChange={handleChange}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <span>{contact.name}: {contact.number}</span>
              <button onClick={() => handleEdit(contact.id)}>Edit</button>
              <button onClick={() => handleDelete(contact.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};