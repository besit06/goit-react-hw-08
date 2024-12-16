import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact, editContact } from './operations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, (state, { error }) => {
        state.isLoading = false;
        state.error = error.message;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((contact) => contact.id !== payload.id);
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
  console.log('Before update:', state.items);
  state.items = state.items.map((contact) =>
    contact.id === payload.id ? payload : contact
  );
  console.log('After update:', state.items);
});
  },
});

export const contactsReducer = contactsSlice.reducer;