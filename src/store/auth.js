import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'auth',
  initialState: {
    id: 0,
    name: 'Guest',
  },
  reducers: {
    setAuth: (state, action) => ({ ...state, ...action.payload }),
  },
});