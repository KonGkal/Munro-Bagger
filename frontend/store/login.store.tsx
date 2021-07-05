/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../services/apiService';

export const postLogin = createAsyncThunk('login/postLogin', async (email: string) => {
  const { data } = await login(email);
  if (!data) return {};
  return data;
});

interface LoginState {
  userDetails: {
    id: number
    email: string
    imageUrl: string
  }
  loading: 'idle' | 'pending' | 'succeeded' | 'failed'
  authToken: string
}

const initialLoginState = {
  userDetails: {},
  loading: 'idle',
  authToken: '',
} as LoginState;

const loginSlice = createSlice({
  name: 'login',
  initialState: initialLoginState,
  reducers: {
    setToken(state, action) {
      state.authToken = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postLogin.pending, (state) => {
      state.loading = 'pending';
    });
    builder.addCase(postLogin.fulfilled, (state, action) => {
      state.userDetails = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(postLogin.rejected, (state) => {
      state.loading = 'failed';
    });
  },
});

export const { setToken } = loginSlice.actions;
export default loginSlice.reducer;
