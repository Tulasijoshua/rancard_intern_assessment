import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      localStorage.setItem('products', JSON.stringify(state.products));
    },
    loadProducts: (state) => {
      const products = localStorage.getItem('products');
      if (products) {
        state.products = JSON.parse(products);
      }
    },
  },
});

export const { addProduct, loadProducts } = productSlice.actions;
export default productSlice.reducer;
