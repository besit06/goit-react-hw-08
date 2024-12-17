import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../services/api';


const setAuthHeader = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};


const clearAuthHeader = () => {
  api.defaults.headers.common.Authorization = '';
};


export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/signup', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const response = await api.post('/users/login', credentials);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const logOut = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await api.post('/users/logout');
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);


export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('No token found');
    }

    setAuthHeader(persistedToken);

    try {
      const response = await api.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);