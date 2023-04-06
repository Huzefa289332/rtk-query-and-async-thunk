import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchUsers = createAsyncThunk('users/fetch', async () => {
  const response = await axios.get('http://localhost:3006/users');

  await pause(1000);

  return response.data;
});

export { fetchUsers };

const pause = duration => {
  return new Promise(resolve => {
    setTimeout(resolve, duration);
  });
};
