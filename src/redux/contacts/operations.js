import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';
import { api } from '../../services/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await api.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    try {
      const response = await api.post('/contacts', contact);
      toast.success('Contact added successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to add contact.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await api.delete(`/contacts/${contactId}`);
      toast.success('Contact deleted successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to delete contact.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async ({ id, name, number }, thunkAPI) => {
    try {
      const response = await api.patch(`/contacts/${id}`, { name, number });
      toast.success('Contact edited successfully!');
      return response.data; 
    } catch (error) {
      toast.error('Failed to edit contact.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async ({ id, data }, thunkAPI) => {
    try {
      const response = await api.patch(`/contacts/${id}`, data);
      toast.success('Contact updated successfully!');
      return response.data;
    } catch (error) {
      toast.error('Failed to update contact.');
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);