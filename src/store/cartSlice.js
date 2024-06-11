import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; 
      const existingItemIndex = state.items.findIndex(item => item.product.id === newItem.product.id);

      if (existingItemIndex !== -1) {
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      state.items = state.items.filter(item => item.product.id !== idToRemove);
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cartItems');
    },
    loadCart: (state) => {
      const storedItems = localStorage.getItem('cartItems');
      if (storedItems) {
        state.items = JSON.parse(storedItems);
      }
    },
  },
});

export const { addItem, removeItem, clearCart, loadCart } = cartSlice.actions;

export default cartSlice.reducer;
