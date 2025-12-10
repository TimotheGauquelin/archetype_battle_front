import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuthenticated: boolean;
  id: string | null;
  username: string;
  email: string;
  roles: string[];
  token: string;
}

const initialState: UserState = {
  isAuthenticated: false,
  id: null,
  username: '',
  email: '',
  roles: [],
  token: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
      state.token = action.payload.token;
    },
    clearUser: state => {
      state.isAuthenticated = false;
      state.id = null;
      state.username = '';
      state.email = '';
      state.roles = [];
      state.token = '';
    },
    updateUser: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.roles = action.payload.roles;
    },
  },
});

export const { setUser, clearUser, updateUser } = userSlice.actions;

export default userSlice.reducer;
