// historySlice.js
import { createSlice } from '@reduxjs/toolkit';

// Load history from local storage if available
const loadHistoryFromStorage = () => {
  const storedHistory = localStorage.getItem('history');
  return storedHistory ? JSON.parse(storedHistory) : [];
};

const initialState = {
  history: loadHistoryFromStorage(),
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
      state.history.push(action.payload);
      localStorage.setItem('history', JSON.stringify(state.history));
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem('history');
    },
    loadHistoryFromLocalStorage: (state) => {
      state.history = loadHistoryFromStorage();
    }
  },
});

export const { addToHistory, clearHistory, loadHistoryFromLocalStorage } = historySlice.actions;

export default historySlice.reducer;
