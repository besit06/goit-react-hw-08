import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useState } from 'react';
import { ConfirmationModal } from '../Modal/Modal'; 
import s from './ContactList.module.css';


export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({ name: '', number: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [contactToDelete, setContactToDelete] = useState(null);

  const handleDeleteClick = (id) => {
    const contact = contacts.find((contact) => contact.id === id);
    setContactToDelete(contact);
    setIsModalOpen(true);
  };

  const confirmDelete = () => {
    if (contactToDelete) {
      dispatch(deleteContact(contactToDelete.id));
    }
    closeModal();
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setContactToDelete(null);
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
    <>
      <ul className={s.list}>
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
                <button onClick={() => handleDeleteClick(contact.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>

            <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        contactName={contactToDelete ? contactToDelete.name : ''}
      />
    </>
  );
};