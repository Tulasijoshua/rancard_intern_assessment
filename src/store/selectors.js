// store/selectors.js
import { createSelector } from '@reduxjs/toolkit';

export const selectCartItems = state => state.cart.items;

export const selectTotalItems = createSelector(
    [selectCartItems],
    (items) => items.reduce((total, item) => total + item.quantity, 0)
);

export const selectTotalPrice = createSelector(
    [selectCartItems],
    (items) => items.reduce((total, item) => total + item.variants[0].price * item.quantity, 0)
);