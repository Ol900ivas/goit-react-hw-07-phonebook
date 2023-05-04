import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

axios.defaults.baseURL = 'https://64526ae6bce0b0a0f7466290x.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts/contacts');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post('contacts/contacts', data);
      toast.success('A new contact was added successfully!');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/contacts/${contactId}`);
      toast.success('A contact was deleted successfully!');
      return response.data;
    } catch (error) {
      toast.error('Something went wrong. Please try again later');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
