// src/features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('currentUser')) || null,
  isAuthenticated: !!localStorage.getItem('currentUser'),
  usernameError: null,
  passwordError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    register: (state, action) => {
      const { username, email, password } = action.payload;
      const newUser = { username, email, password };
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
    },
    signIn: (state, action) => {
      const { username, email, password } = action.payload;
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find((u) => u.username === username);

      if (!user) {
        state.isAuthenticated = false;
        state.usernameError = 'Username does not exist';
        state.passwordError = null;
      } else if (user.password !== password) {
        state.isAuthenticated = false;
        state.usernameError = null;
        state.passwordError = 'Password Incorrect';
      } else {
        localStorage.setItem('currentUser', JSON.stringify(user));
        state.user = user;
        state.isAuthenticated = true;
        state.usernameError = null;
        state.passwordError = null;
      }
    },
    signOut: (state) => {
      localStorage.removeItem('currentUser');
      state.user = null;
      state.isAuthenticated = false;
      state.usernameError = null;
      state.passwordError = null;
    },
  },
});

export const { register, signIn, signOut } = authSlice.actions;
export default authSlice.reducer;
