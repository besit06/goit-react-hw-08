import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact, deleteContact } from '../../redux/contacts/operations';
import { selectContacts, selectFilteredContacts, selectIsLoading } from '../../redux/contacts/selectors';
import { Filter } from '../../components/Filter/Filter';
import { ContactList } from '../../components/ContactList/ContactList';
import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useEffect } from 'react';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  // Fetch contacts when the component mounts
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Handle adding a contact
  const handleAddContact = (contact) => {
    const isDuplicate = contacts.some(
      (existingContact) =>
        existingContact.name.toLowerCase() === contact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }

    dispatch(addContact(contact));
  };

  // Handle deleting a contact
  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      <h1>Your Contacts</h1>
      <p>Here you can manage all your contacts.</p>

      {/* Contact Form */}
      <ContactForm onAddContact={handleAddContact} />

      {/* Filter */}
      <Filter />

      {/* Contacts List */}
      {isLoading ? (
        <p>Loading contacts...</p>
      ) : (
        <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
      )}
    </div>
  );
};