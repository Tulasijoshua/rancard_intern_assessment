import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // Array to store the items in the cart
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload; // Payload should contain the product and quantity
      // Check if the item already exists in the cart
      const existingItemIndex = state.items.findIndex(item => item.product.id === newItem.product.id);

      if (existingItemIndex !== -1) {
        // If the item already exists, update the quantity
        state.items[existingItemIndex].quantity += newItem.quantity;
      } else {
        // If it's a new item, add it to the cart
        state.items.push(newItem);
      }
      // Save cart items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    removeItem: (state, action) => {
      const idToRemove = action.payload;
      // Remove the item from the cart based on the ID
      state.items = state.items.filter(item => item.product.id !== idToRemove);
      // Save cart items to localStorage
      localStorage.setItem('cartItems', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      // Clear all items from the cart
      state.items = [];
      // Clear cart items from localStorage
      localStorage.removeItem('cartItems');
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
