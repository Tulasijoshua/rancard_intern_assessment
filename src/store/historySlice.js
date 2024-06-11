import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: []
};

const getRandomStatus = () => {
    const statuses = ['pending', 'confirmed', 'canceled'];
    return statuses[Math.floor(Math.random() * statuses.length)];
};

export const historySlice = createSlice({
  name: 'history',
  initialState,
  reducers: {
    addToHistory: (state, action) => {
        const { items, userDetails } = action.payload;

        const itemsWithDetails = items.map(item => ({
            ...item,
            userDetails
        }));

        if (Array.isArray(state.history)) {
            state.history.push(...itemsWithDetails);
        } else {
            state.history = [...itemsWithDetails];
        }

        localStorage.setItem('history', JSON.stringify(state.history));
    },
    loadHistory: (state) => {
        const storedItems = localStorage.getItem('history');
        if (storedItems) {
          state.items = JSON.parse(storedItems);
        }
      },
  },
});

export const { addToHistory, loadHistory } = historySlice.actions;

export default historySlice.reducer;
