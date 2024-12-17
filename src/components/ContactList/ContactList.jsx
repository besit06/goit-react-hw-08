import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { selectFilteredContacts } from '../../redux/contacts/selectors';
import { useState } from 'react';
import { ConfirmationModal } from '../Modal/Modal'; 
import {
  List,
  ListItem,
  ListItemText,
  Button,
  IconButton,
  TextField,
  Box,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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
      <List>
        {contacts.map((contact) => (
          <ListItem key={contact.id} divider>
            {editId === contact.id ? (
              <Box
                sx={{ display: 'flex', gap: 2, alignItems: 'center', width: '100%' }}
              >
                <TextField
                  name="name"
                  label="Name"
                  value={editData.name}
                  onChange={handleChange}
                  size="small"
                />
                <TextField
                  name="number"
                  label="Number"
                  value={editData.number}
                  onChange={handleChange}
                  size="small"
                />
                <Button variant="contained" color="success" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="outlined" onClick={() => setEditId(null)}>
                  Cancel
                </Button>
              </Box>
            ) : (
              <>
                <ListItemText
                  primary={contact.name}
                  secondary={contact.number}
                />
                <IconButton color="primary" onClick={() => handleEdit(contact.id)}>
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  color="error"
                  onClick={() => handleDeleteClick(contact.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </ListItem>
        ))}
      </List>

      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={confirmDelete}
        contactName={contactToDelete ? contactToDelete.name : ''}
      />
    </>
  );
};