import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, addContact } from '../../redux/contacts/operations';
import { selectContacts, selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { selectFilter } from '../../redux/filters/selectors'; 
import { ContactList } from '../../components/ContactList/ContactList';
import { Filter } from '../../components/Filter/Filter';
import { ContactForm } from '../../components/ContactForm/ContactForm';

export const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter); 
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Contacts</h1>
      <ContactForm onSubmit={handleAddContact} />
      <Filter />
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {filteredContacts.length > 0 ? (
        <ContactList contacts={filteredContacts} />
      ) : (
        <p>No contacts found</p>
      )}
    </div>
  );
};