import { configureStore } from '@reduxjs/toolkit';
// import authReducer from './features/auth/authSlice';
import authReducer from './authSlice';
import productReducer from './productSlice';
import cartReducer from './cartSlice';
import historyReducer from './historySlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    history: historyReducer,
  },
});

export default store;